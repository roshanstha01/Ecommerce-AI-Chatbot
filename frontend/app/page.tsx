"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    const updatedChat: ChatMessage[] = [
      ...chat,
      { role: "user", text: userMessage },
    ];

    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://ecommerce-ai-backend-3g7y.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: updatedChat,
        }),
      });

      const data = await response.json();

      setChat([
        ...updatedChat,
        { role: "bot", text: data.reply || "No response from backend." },
      ]);
    } catch (error) {
      setChat([
        ...updatedChat,
        { role: "bot", text: "Failed to connect to backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 E-commerce AI Chatbot</h1>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-4 h-[500px] overflow-y-auto">
        {chat.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            Ask about shipping, refunds, returns, or payments.
          </p>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg whitespace-pre-line ${
              msg.role === "user"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
              }`}
            >
          {msg.text}
          </span>
          </div>
        ))}

        {loading && (
          <div className="text-left mb-3">
            <span className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-black">
              Typing...
            </span>
          </div>
        )}
      </div>

      <div className="w-full max-w-2xl flex mt-4 gap-2">
        <input
          className="flex-1 border rounded-lg px-4 py-2 bg-white"
          placeholder="Ask about orders, refunds, shipping..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </main>
  );
}