⭐ Sanskruti Manoria Personal Portfolio - Next.js | TypeScript | Tailwind | AI Voice Assistant

A modern, high-performance developer portfolio showcasing projects, experience, and technical depth — powered by Next.js, TypeScript, Tailwind CSS, and a fully integrated AI Voice Assistant built from scratch.
Designed for speed, interactivity, and storytelling, this portfolio blends clean UI with embedded intelligence to create a uniquely immersive experience.

🚀 Live Preview

👉 www.sanskrutiswe.site

🌟 Key Features
🔹 ⚡ Modern Full-Stack Portfolio

Built with the latest web technologies:

Next.js App Router

React 18 + Client/Server Components

TypeScript

Tailwind CSS

Dark/Light theme switching

Fully responsive across all devices

🔹 🤖 AI-Powered Portfolio Assistant (Text + Voice)

A custom-built intelligent assistant sits in the corner of the site:

Voice input using Web Speech API

LLM-powered answers using OpenAI/Claude

Strictly limited to portfolio-only knowledge

Friendly fallback messages for off-topic queries

Smooth pop-in tagline + floating UI button

Chat persists per session and scrolls automatically

This transforms the portfolio from a static site → to an interactive product demo.

🔹 🎙 Voice Recognition

Speak instead of typing:

“Tell me about your React experience”

“Explain the EKS project”

“What tech stack do you use?”

The AI agent listens, converts speech → text, and responds.

🔹 🎨 Clean, Minimal, Premium UI

Floating theme toggle

Floating chatbot button

Soft shadows, blur effects, modern glassmorphism

Smooth section highlights using IntersectionObserver

Professional typography & spacing

Mobile-optimized layouts

🔹 📂 Organized Codebase
/app
/api/portfolio-chat → AI assistant backend route
/components → UI + chatbot components
/lib/data.ts → Skills, projects, experience
/context → Theme & Active Section logic

Everything is modular, typed, and clean.

🔹 🔐 Safe AI Integration

The assistant is locked to:

Skills

Projects

Experience

Education

Contact information

If a user asks anything unrelated (e.g., politics, history, random facts), it responds:

“I'm your portfolio assistant, so I can only answer questions about Sanskruti's skills, experience, and projects.”

No hallucinations. No off-brand answers.

🧠 Tech Stack
Frontend

Next.js 14

React 18

TypeScript

Tailwind CSS

React Icons

AI / Voice

Web Speech API

OpenAI / Claude client

Custom system prompt & constrained agent

Voice-to-text pipeline

Backend

Next.js API Routes

TypeScript strict mode

Structured conversation history

UX / Behavior

IntersectionObserver (active section tracking)

Smooth scrolling

Responsive UI

Theme context + persistence

Floating UI elements

🏗 How the AI Assistant Works

User types or speaks a question

Voice recognition → text

Next.js API route sends message + chat history to LLM

LLM applies portfolio-only system rules

Returns safe, contextual answer

UI auto-scrolls and renders new message

Simple, fast, and extensible.

🛠️ Local Development

1. Install dependencies
   npm install

2. Add API keys (optional but required for AI assistant)

Create .env.local:

OPENAI_API_KEY=your_key_here

3. Start development server
   npm run dev

📦 Deployment

This portfolio is optimized for:

Vercel (recommended)

Zero-config deploy

Auto-optimized images, scripts, and routes

Make sure to add:

OPENAI_API_KEY

in Vercel → Settings → Environment Variables.
