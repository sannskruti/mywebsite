// components/voice-agent.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsRobot } from "react-icons/bs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

const styles = `
.ai-tagline-pop {
  animation: popIn 0.35s ease-out;
}

@keyframes popIn {
  0% { opacity: 0; transform: translateY(8px) scale(0.9); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
`;

const VoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input_text, setInput_text] = useState("");
  const [messages_list, setMessages_list] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  const recognitionRef = useRef<any>(null);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  // Setup browser speech recognition
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not available in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput_text((prev) => (prev ? prev + " " + transcript : transcript));
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTagline(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowTagline(false);
    } else {
      const timer = setTimeout(() => setShowTagline(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleToggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = async () => {
    const trimmed = input_text.trim();
    if (!trimmed) return;

    const newMessages_list: ChatMessage[] = [
      ...messages_list,
      { role: "user", content: trimmed },
    ];
    setMessages_list(newMessages_list);
    setInput_text("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: newMessages_list,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("API error:", data);
        setMessages_list((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      } else {
        setMessages_list((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages_list((prev) => [
        ...prev,
        { role: "assistant", content: "Network error, try again." },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      }, 0);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognition.start();
    }
  };

  return (
    <>
      <style>{styles}</style>

      <button
        type="button"
        onClick={handleToggleChat}
        className="
          fixed
          bottom-20
          right-5
          bg-white
          w-[3rem]
          h-[3rem]
          bg-opacity-80
          backdrop-blur-[0.5rem]
          border
          border-white
          border-opacity-40
          shadow-2xl
          rounded-full
          flex
          items-center
          justify-center
          hover:scale-[1.15]
          active:scale-105
          transition-all
          dark:bg-gray-950
        "
        aria-label="Open AI voice assistant"
      >
        <BsRobot className="text-xl text-gray-800 dark:text-gray-100" />
      </button>

      {showTagline && !isOpen && (
        <div
          className="
            fixed
            bottom-[5.6rem]
            right-[5.5rem]
            hidden
            md:flex
            items-center
            rounded-full
            bg-white
            bg-opacity-80
            backdrop-blur-[0.5rem]
            px-3
            py-1
            text-[11px]
            font-medium
            shadow-2xl
            border
            border-white
            border-opacity-40
            dark:bg-gray-950
            dark:text-gray-100
            w-auto
            whitespace-nowrap
            ai-tagline-pop
          "
        >
          Talk to my AI voice bot
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-40
            right-5
            z-40
            w-80
            max-h-[60vh]
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl
            flex
            flex-col
            dark:bg-gray-950
            dark:border-gray-700
          "
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-700">
            <div className="text-sm font-semibold"> Portfolio Assistant</div>
            <button
              onClick={handleToggleChat}
              className="text-xs opacity-70 hover:opacity-100"
            >
              ✕
            </button>
          </div>

          <div
            ref={chatWindowRef}
            className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm"
          >
            {messages_list.length === 0 && (
              <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                <p className="font-semibold text-gray-700 dark:text-gray-100">
                  Try talking to my AI voice agent 👇
                </p>
                <p>
                  Ask about my projects, tech stack, experience, or anything you
                  see on this portfolio. You can type or tap the mic and speak.
                </p>
              </div>
            )}

            {messages_list.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-3 py-2 max-w-[85%] whitespace-normal break-words ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && <p className="text-xs text-gray-500">Thinking…</p>}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 px-2 py-2 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleListening}
              className={`
                flex h-9 w-9 items-center justify-center rounded-full border text-sm
                ${
                  isListening
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-700 border-gray-300 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100"
                }
              `}
              title="Use microphone"
            >
              🎤
            </button>
            <input
              value={input_text}
              onChange={(e) => setInput_text(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              className="
                flex-1
                bg-transparent
                text-sm
                outline-none
                border border-gray-200
                dark:border-gray-700
                rounded-full
                px-3
                py-1.5
              "
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading || !input_text.trim()}
              className="
                text-xs
                px-3
                py-1.5
                rounded-full
                bg-blue-500
                text-white
                disabled:opacity-50
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAgent;
