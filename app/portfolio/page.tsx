type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  year: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "hooze-ai",
    title: "Hooze AI",
    category: "AI Automation Studio",
    description:
      "The Hooze Enterprises done-for-you layer: meeting-booking assistants, lead scraping and enrichment, WhatsApp AI sales bots, content pipelines, and CRM sync — packaged as a fixed-scope offer for small business owners. Full marketing site, offer, and pricing engine, live in production.",
    link: "https://hoozeai.vercel.app",
    linkLabel: "Visit Live Site",
    tags: ["Next.js", "TypeScript", "Vercel", "GitHub Actions", "Analytics", "Gemini", "Groq"],
    year: "2026",
    image: "/hooze.png",
    featured: true,
  },
    {
    id: "whatsapp-sales-crm",
    title: "WhatsApp AI Sales CRM",
    category: "AI Automation",
    description:
      "Multi-tenant conversational CRM built for real estate agencies. Full LLM orchestration with Groq/Gemini fallback chain, pgvector-powered RAG for property knowledge, lead scoring, rolling conversation memory, state machine-driven sales flow, and a Next.js analytics dashboard. Pilot client: Praise Dynasty Realty, Abuja.",
    link: "#",
    linkLabel: "Case Study Coming Soon",
    tags: ["Python", "FastAPI", "Supabase", "pgvector", "Groq", "Gemini", "Evolution API", "Next.js", "Railway"],
    year: "2025–2026",
    image: "/comingsoon.jpg",
    featured: true,
  },
  {
    id: "commerce-chat",
    title: "Hooze CRM",
    category: "AI E-Commerce",
    description:
      "WhatsApp-native checkout and digital product fulfillment platform for Nigerian sellers. Deterministic AI state machine, Paystack payment verification, atomic delivery logic, and per-instance webhook auth.",
    link: "#",
    linkLabel: "Case Study Coming Soon",
    tags: ["Python", "FastAPI", "Next.js", "Supabase", "Paystack", "Evolution API", "Groq", "Vercel"],
    year: "2026",
    image: "/ho.jpeg",
  },
  {
    id: "clinical-clarity",
    title: "Clinical Clarity",
    category: "Health Tech",
    description:
      "Medication management app for chronic disease patients in Nigeria. Offline-first architecture, AI-driven adherence reminders, WhatsApp caregiver alert layer, and a B2B clinic/health program business model.",
    link: "#",
    linkLabel: "In Development",
    tags: ["React Native", "FastAPI", "Supabase", "WhatsApp", "AI"],
    year: "2026",
    image: "/ceenko.png",
  },
  {
    id: "studyapp",
    title: "StudyApp",
    category: "AI Education",
    description:
      "Adaptive AI study engine for Nigerian university students. Groq LLaMA-powered Q&A, Qdrant semantic search, 8 NUC faculty subject categories, and personalized learning paths.",
    link: "#",
    linkLabel: "Project Notes",
    tags: ["Python", "FastAPI", "Groq", "Qdrant", "Next.js", "Supabase", "Railway"],
    year: "2025",
    image: "/mentorai.png",
  },
  {
    id: "outbound-acquisition",
    title: "AI Outbound Acquisition System",
    category: "AI Automation",
    description:
      "Cold email engine for international outreach. Website analysis, AI draft generation with Groq/Gemini fallback, human approval gate, Gmail send, and reply tracking — all in a Streamlit dashboard.",
    link: "#",
    linkLabel: "Project Notes",
    tags: ["Python", "Streamlit", "Groq", "Gemini", "Gmail", "Supabase"],
    year: "2025",
    image: "/comingsoon.jpg",
  },
  {
    id: "afit-admission-assistant",
    title: "AFIT Admission Assistant",
    category: "Conversational AI",
    description:
      "Conversational assistant designed to simplify admission guidance and answer common student questions for Air Force Institute of Technology.",
    link: "https://www.loom.com/share/29575ac8814c46d6bb0211ae0214a095?sid=9af96492-d5cf-4231-8592-94f7b9c73722",
    linkLabel: "Watch Demo",
    tags: ["Python", "NLP", "AI"],
    year: "2025",
    image: "/afitassistant.png",
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <section className="border-b border-dark-70 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label mb-4">Work</p>
          <h1 className="mb-6 font-display text-5xl font-extrabold sm:text-6xl">
            Portfolio
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-dark-30">
            AI systems, automation products, and backend infrastructure built for real businesses, running in production.
          </p>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-b border-dark-70 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <p className="section-label mb-3">Featured</p>
              <h2 className="font-display text-4xl font-extrabold">
                Flagship Work
              </h2>
            </div>

            <div className="space-y-10">
              {featuredProjects.map((featuredProject) => (
                <article
                  key={featuredProject.id}
                  id={featuredProject.id}
                  className="card-glow overflow-hidden border border-dark-70 bg-dark-85 scroll-mt-28"
                >
                  <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="h-72 overflow-hidden lg:h-full">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="text-xs font-display tracking-widest text-orange uppercase">
                          {featuredProject.category}
                        </span>
                        <span className="text-xs font-display text-dark-40">
                          {featuredProject.year}
                        </span>
                      </div>
                      <h3 className="mb-3 font-display text-2xl font-bold">
                        {featuredProject.title}
                      </h3>
                      <p className="mb-6 max-w-xl text-sm leading-relaxed text-dark-30">
                        {featuredProject.description}
                      </p>
                      <div className="mb-8 flex flex-wrap gap-2">
                        {featuredProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-dark-60 px-3 py-1 text-xs font-display tracking-wider text-dark-40 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={featuredProject.link}
                        target={featuredProject.link === "#" ? undefined : "_blank"}
                        rel={featuredProject.link === "#" ? undefined : "noopener noreferrer"}
                        className="inline-block border border-orange px-6 py-3 text-xs font-display tracking-widest text-orange uppercase transition-all hover:bg-orange hover:text-white"
                      >
                        {featuredProject.linkLabel}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="section-label mb-3">Projects</p>
            <h2 className="font-display text-4xl font-extrabold">More work</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="card-glow flex flex-col overflow-hidden border border-dark-70 bg-dark-85 scroll-mt-28"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="text-xs font-display tracking-widest text-orange uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs font-display text-dark-40">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-dark-30">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-dark-60 px-3 py-1 text-xs font-display tracking-wider text-dark-40 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target={project.link === "#" ? undefined : "_blank"}
                    rel={project.link === "#" ? undefined : "noopener noreferrer"}
                    className="border-t border-dark-70 pt-4 text-xs font-display tracking-widest text-dark-40 uppercase transition-colors hover:text-orange"
                  >
                    {project.linkLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
