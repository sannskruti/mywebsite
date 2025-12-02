import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { links, experiencesData, projectsData, skillsData } from "@/lib/data";

// ====== COMPACT SUMMARIES ========== ========================================================
const skillsSummary = Array.isArray(skillsData)
  ? skillsData
      .map((s: any) => {
        if (typeof s === "string") return s;
        if (s?.name) return s.name;
        return "";
      })
      .filter(Boolean)
      .join(", ")
  : "";

const projectSummary = Array.isArray(projectsData)
  ? projectsData
      .map((p: any) => {
        const title = p?.title ?? "Untitled project";
        const tech = Array.isArray(p?.techStack)
          ? p.techStack.join(", ")
          : Array.isArray(p?.technologies)
          ? p.technologies.join(", ")
          : "";
        return tech ? `${title} (tech: ${tech})` : title;
      })
      .join("\n")
  : "";

const experienceSummary = Array.isArray(experiencesData)
  ? experiencesData
      .map((e: any) => {
        const role = e?.role ?? "Role";
        const company = e?.company ?? "Company";
        const start = e?.start ?? "";
        const end = e?.end ?? "Present";
        const tech = Array.isArray(e?.tech) ? e.tech.join(", ") : "";
        return `${role} at ${company} (${start}–${end})${
          tech ? ` – ${tech}` : ""
        }`;
      })
      .join("\n")
  : "";

const linksSummary = Array.isArray(links)
  ? links
      .map((l: any) => (l?.label && l?.href ? `${l.label}: ${l.href}` : ""))
      .filter(Boolean)
      .join("\n")
  : "";
// ================================================================================================

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        errorType: "server_config",
        message:
          "AI assistant is not configured on the server (missing OPENAI_API_KEY).",
      },
      { status: 500 }
    );
  }

  const openai = new OpenAI({ apiKey });
  const body = await req.json();
  const { message, history } = body as {
    message: string;
    history?: { role: "user" | "assistant"; content: string }[];
  };

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { errorType: "bad_request", message: "No message provided." },
      { status: 400 }
    );
  }

  const MAX_HISTORY = 6;
  const trimmedHistory = history
    ? history.slice(Math.max(history.length - MAX_HISTORY, 0))
    : [];

  const portfolioContext = `
You are an AI assistant for Sanskruti’s portfolio website.

You MUST answer only based on the portfolio info below.

SKILLS:
${skillsSummary}

PROJECTS:
${projectSummary}

EXPERIENCE:
${experienceSummary}

LINKS:
${linksSummary}

If the user asks anything NOT about her skills, tech stack, projects,
experience, education, or work, respond with EXACTLY:

"I can help only with Sanskruti’s skills, experience, and projects. 
Ask me something about her work 😊"
`;

  const messages = [
    { role: "system" as const, content: portfolioContext },
    ...(history || []),
    { role: "user" as const, content: message },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.3,
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "Sorry, I couldn’t generate a response.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err: any) {
    console.error("OpenAI error:", err);
    if (err?.status === 429 || err?.code === "rate_limit_exceeded") {
      return NextResponse.json(
        {
          errorType: "rate_limit",
          reply:
            "I’ve hit my AI usage limit for now and can’t answer at the moment. Please try again later.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        errorType: "openai_error",
        message:
          "I ran into a problem answering that. Please ask about Sanskruti’s skills, experience, or projects again.",
      },
      { status: 500 }
    );
  }
}
