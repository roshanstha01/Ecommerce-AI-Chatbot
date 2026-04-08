/*"use client";

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
      const response = await fetch("https://api.roshan-shrestha.name.np/chat", {
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
}*/

export default function PortfolioHomepage() {
  const projects = [
    {
      title: "E-commerce AI Chatbot",
      description:
        "AI chatbot with RAG-style retrieval, embeddings, product-aware responses, backend API integration, and deployed frontend/backend setup.",
      link: "https://roshan-shrestha.name.np",
      tech: ["React", "Node.js", "LLM API", "Embeddings"],
    },
    {
      title: "Fraud Detection ML",
      description:
        "Machine learning system for detecting fraudulent transactions with preprocessing, model training, threshold tuning, and prediction workflow.",
      link: "https://github.com/roshanstha01/fraud-detection-ml",
      tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
    },
    {
      title: "HR Salary Prediction & Analytics",
      description:
        "ML-based salary prediction project using HR data with feature engineering, analytics, visualizations, and an interactive app.",
      link: "#",
      tech: ["Python", "Pandas", "ML", "Analytics"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(255,255,255,0.02))]" />

        <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8">
          <nav className="mb-10 flex items-center justify-between border-b border-white/10 pb-4 sm:mb-14 sm:pb-5">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />
              <div>
                <p className="text-base font-semibold tracking-[0.18em] text-white sm:text-lg">
                  ROSHAN
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
                  Portfolio
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#about" className="text-sm text-slate-300 transition hover:text-white">About</a>
              <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">Projects</a>
              <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">Contact</a>
              <a
                href="https://github.com/roshanstha01"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </nav>

          <div className="grid flex-1 items-center gap-10 py-6 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-300 backdrop-blur-md sm:px-4 sm:text-sm">
                AI / ML Developer • Computer Engineering Student
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 sm:text-sm">
                  Portfolio
                </p>
                <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                  Roshan
                  <br />
                  <span className="bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
                    Shrestha
                  </span>
                </h1>
                <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
                  I build polished AI, ML, and full-stack projects focused on
                  real-world usability, deployment, and strong problem solving.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02] sm:px-6"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/roshanstha01"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 sm:px-6"
                >
                  GitHub
                </a>
              </div>

              <div className="grid max-w-xl grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-2xl font-semibold text-white">3+</p>
                  <p className="text-sm text-slate-400">Featured Projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-2xl font-semibold text-white">AI/ML</p>
                  <p className="text-sm text-slate-400">Focused Domain</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-2xl font-semibold text-white">Deploy</p>
                  <p className="text-sm text-slate-400">Build to Launch</p>
                </div>
              </div>
            </div>

            <div className="order-first flex justify-center lg:order-none">
              <div className="relative h-[360px] w-[260px] rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:h-[420px] sm:w-[300px] md:h-[460px] md:w-[320px] md:rounded-[36px]">
                <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-violet-500/30 blur-3xl" />
                <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-zinc-950 sm:rounded-[28px]">
                  <img
                    src="/profile.jpeg"
                    alt="Roshan"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5">
                    <p className="text-base font-semibold sm:text-lg">Roshan Shrestha</p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      ML • GenAI • Backend Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400 sm:text-sm">
                  What I do
                </p>
                <h2 className="mb-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Building modern
                  <span className="text-violet-300"> AI-driven </span>
                  experiences
                </h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  Focused on machine learning, generative AI concepts, backend
                  systems, deployed apps, and clean user-facing interfaces.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="mb-2 text-sm text-slate-400">Primary Focus</p>
                  <p className="font-semibold text-white">ML, GenAI, Backend</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="mb-2 text-sm text-slate-400">Strength</p>
                  <p className="font-semibold text-white">Real-world project building</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">
                About Me
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                Turning ideas into useful digital products
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:p-8">
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I’m a Computer Engineering student with strong interest in AI,
                machine learning, backend systems, and product-focused
                development. I enjoy creating practical applications such as
                chatbots, analytics dashboards, and ML-powered tools that solve
                real problems with clean design and deployable architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">
              Selected Work
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    0{index + 1}
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Featured
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-violet-300 transition hover:text-white"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-6 text-center backdrop-blur-xl sm:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">
              Contact
            </p>
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Let’s build something impactful
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-slate-300 sm:text-base">
              Open to internships, collaborations, and AI/ML project opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/roshanstha01"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="mailto:your-email@example.com"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}