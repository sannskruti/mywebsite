// app/api/portfolio-chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

import { links, experiencesData, projectsData, skillsData } from "@/lib/data";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body as {
      message: string;
      history?: { role: "user" | "assistant"; content: string }[];
    };

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
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
- If the user asks anything NOT related to her portfolio (for example: general knowledge, history, politics, India, movies, random life advice, etc.), respond with EXACTLY this sentence and nothing else:

"I'm your portfolio assistant, so I can only answer questions about Sanskruti's skills, experience, and projects. Please ask me something about her work."

- Do NOT output raw URLs.
- Do NOT use markdown links like [text](url).
- If something is on the web, just say: "You can find this on my portfolio website."
`;

    const messages = [
      { role: "system" as const, content: portfolioContext },
      ...(history || []),
      { role: "user" as const, content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.4,
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "Sorry, I couldn’t generate a response.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("portfolio-chat error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
