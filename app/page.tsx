import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grain">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-24">
          {/* Left — text */}
          <div>
            <p className="section-label mb-6 animate-fade-up stagger-1">
              Available for work
            </p>

            <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8 animate-fade-up stagger-2">
              AI Engineer
              <br />
              <span className="text-orange">&amp; Automation</span>
              <br />
              Builder
            </h1>

            <p className="text-dark-30 text-base leading-relaxed max-w-md mb-10 animate-fade-up stagger-3">
              I design and build intelligent software systems that help businesses
              automate operations, engage customers, and ship AI products that
              actually work. Based in Nigeria, building globally.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-dark-60 text-xs font-display tracking-widest uppercase hover:border-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — photo + stat cards */}
          <div className="flex flex-col gap-6 animate-fade-up stagger-5">
            <div className="w-full overflow-hidden border border-dark-70">
              <img src="/pass.png" alt="Sadiq Shehu" className="w-full h-full object-cover object-center" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4+", label: "Years Building" },
                { value: "6+", label: "Live AI Products" },
                { value: "Python", label: "Primary Language" },
                { value: "FastAPI", label: "Backend Stack" },
              ].map((stat) => (
                <div key={stat.label} className="card-glow border border-dark-70 bg-dark-85 p-8">
                  <div className="font-display font-800 text-3xl text-orange mb-2">{stat.value}</div>
                  <div className="text-xs text-dark-30 uppercase tracking-widest font-display">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT I DO ────────────────────────────────────── */}
      <section className="py-24 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <p className="section-label mb-3">Capabilities</p>
              <h2 className="font-display font-800 text-4xl">What I Do</h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-display tracking-widest uppercase text-dark-30 hover:text-orange transition-colors border-b border-dark-60 pb-1 self-start sm:self-auto"
            >
              See all services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark-70">
            {[
              {
                num: "01",
                title: "AI Agents & LLMs",
                desc: "Production-ready AI agents powered by LLMs. Tool calling, memory, state machines, RAG pipelines, and multi-agent orchestration.",
              },
              {
                num: "02",
                title: "WhatsApp Automation",
                desc: "Full WhatsApp-native products — sales bots, CRM systems, customer support automation, and lead qualification flows.",
              },
              {
                num: "03",
                title: "Backend AI Systems",
                desc: "FastAPI backends with async architecture, webhooks, authentication, and AI integrations that scale in production.",
              },
              {
                num: "04",
                title: "AI SaaS Products",
                desc: "End-to-end SaaS builds from product strategy through backend, frontend, and deployment — with AI as the core engine.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-dark-100 p-8 hover:bg-dark-85 transition-colors group"
              >
                <div className="font-display font-800 text-4xl text-dark-60 mb-6 group-hover:text-orange transition-colors">
                  {item.num}
                </div>
                <h3 className="font-display font-700 text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-30 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────── */}
      <section className="py-24 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-3">Featured Work</p>
          <h2 className="font-display font-800 text-4xl mb-16">
            Recent Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "WhatsApp AI Sales CRM",
                category: "AI Automation",
                desc: "Multi-tenant conversational CRM for real estate agencies. LLM orchestration, RAG property knowledge, lead scoring, and full sales pipeline automation over WhatsApp.",
                link: "#",
              },
              {
                title: "commerce-chat",
                category: "AI E-Commerce",
                desc: "WhatsApp-native checkout and digital fulfillment platform for Nigerian sellers. AI-driven state machine, Paystack payments, and automated product delivery.",
                link: "#",
              },
              {
                title: "Clinical Clarity",
                category: "Health Tech",
                desc: "Medication management app for chronic disease patients in Nigeria. Offline-first architecture, AI reminders, and WhatsApp caregiver alerts.",
                link: "#",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                target={project.link === "#" ? undefined : "_blank"}
                rel={project.link === "#" ? undefined : "noopener noreferrer"}
                className="card-glow group border border-dark-70 bg-dark-85 p-8 block"
              >
                <div className="text-xs font-display tracking-widest uppercase text-orange mb-4">
                  {project.category}
                </div>
                <h3 className="font-display font-700 text-xl mb-3 group-hover:text-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-30 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <span className="text-xs font-display tracking-widest uppercase text-dark-40 group-hover:text-orange transition-colors">
                  {project.link === "#" ? "Case Study Coming Soon →" : "View Project →"}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border border-dark-60 text-xs font-display tracking-widest uppercase hover:border-orange hover:text-orange transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STACK STRIP ──────────────────────────────────── */}
      <section className="py-16 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-10 text-center">Core Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "FastAPI", "Next.js", "Supabase", "PostgreSQL",
              "pgvector", "LangChain", "Groq", "Gemini", "Evolution API",
              "Paystack", "Docker", "Railway", "Render", "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-display tracking-wider uppercase px-4 py-2 border border-dark-60 text-dark-40 hover:border-orange hover:text-orange transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─────────────────────────────────────── */}
      <section className="py-24 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-800 text-3xl sm:text-4xl mb-2">
              Ready to work together?
            </h2>
            <p className="text-dark-30 text-sm">
              Open for freelance, consulting, and product collaborations.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-10 py-4 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
