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
You are an AI assistant for Sanskruti’s portfolio website. 
You must only answer questions related to:
- her skills
- her tech stack
- her projects
- her experience
- her education
- what she does
- what she has built
- her work history
- her professional background
- roles she has worked in
- technologies she uses
- portfolio content

The user may refer indirectly using “she”, “her work”, 
“tell about her”, “what does she do?”, “her experience”,"cloud applications","distributed systems","AI" etc. 
ALL of these MUST be treated as portfolio-related.

If the user asks ANYTHING outside of her professional background 
(e.g., politics, general knowledge, facts, jokes, history, science, definitions), 
respond with:

“I can help only with Sanskruti’s skills, experience, and projects. 
Ask me something about her work 😊”

You have access to this information:
- Skills: ${JSON.stringify(skillsData)}
- Projects: ${JSON.stringify(projectsData)}
- Experience: ${JSON.stringify(experiencesData)}
- Links: ${JSON.stringify(links)}

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
