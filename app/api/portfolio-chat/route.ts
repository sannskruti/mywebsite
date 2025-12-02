import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { links, experiencesData, projectsData, skillsData } from "@/lib/data";

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
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

  if (!message) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  const portfolioContext = `
You are an AI assistant that ONLY answers questions about Sanskruti's portfolio.

You have access to this information:
- Skills: ${JSON.stringify(skillsData)}
- Projects: ${JSON.stringify(projectsData)}
- Experience: ${JSON.stringify(experiencesData)}
- Links: ${JSON.stringify(links)}

STRICT RULES (very important):
- Only answer questions about Sanskruti's skills, tech stack, projects, education, roles, achievements, or how to contact her.
- If the user asks anything NOT related to her portfolio, respond with EXACTLY:

"I'm your portfolio assistant, so I can only answer questions about Sanskruti's skills, experience, and projects. Please ask me something about her work."

- Do NOT answer general knowledge or off-topic questions.
- Do NOT output raw URLs or markdown links.
- If user asks if Sanskruti can make websites, apps, AI, cloud, and related software engineering work, Tell Yes.
`;

  const messages = [
    { role: "system" as const, content: portfolioContext },
    ...(history || []),
    { role: "user" as const, content: message },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.3,
  });

  const reply =
    completion.choices[0]?.message?.content ??
    "Sorry, I couldn’t generate a response.";

  return NextResponse.json({ reply });
}
