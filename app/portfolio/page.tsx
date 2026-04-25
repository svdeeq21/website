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
    id: "ai-whatsapp-sales-system",
    title: "AI WhatsApp Sales System",
    category: "Automation",
    description:
      "An AI-powered WhatsApp workflow built for lead engagement, qualification, and follow-up automation.",
    link: "#",
    linkLabel: "Case Study Coming Soon",
    tags: ["Python", "Evolution API", "Render", "Railway", "Docker"],
    year: "2026",
    image: "/ai.png",
    featured: true,
  },
  {
    id: "afit-admission-assistant",
    title: "AFIT Admission Assistant",
    category: "Conversational AI",
    description:
      "A conversational assistant designed to simplify admission guidance and answer common student questions.",
    link: "https://www.loom.com/share/29575ac8814c46d6bb0211ae0214a095?sid=9af96492-d5cf-4231-8592-94f7b9c73722",
    linkLabel: "Watch Demo",
    tags: ["Python", "NLP", "AI"],
    year: "2025",
    image: "/afitassistant.png",
  },
  {
    id: "mentor-ai",
    title: "Mentor AI",
    category: "Knowledge System",
    description:
      "A retrieval-based document assistant for summarization, question answering, and easier knowledge access.",
    link: "https://www.loom.com/share/29575ac8814c46d6bb0211ae0214a095?sid=9af96492-d5cf-4231-8592-94f7b9c73722",
    linkLabel: "Watch Demo",
    tags: ["Python", "RAG", "Embeddings"],
    year: "2025",
    image: "/mentorai.png",
  },
  {
    id: "malaria-diagnosis-model",
    title: "Malaria Diagnosis Model",
    category: "Applied ML",
    description:
      "A predictive machine learning project exploring clinical-data-based diagnosis support.",
    link: "#",
    linkLabel: "Project Notes",
    tags: ["Python", "KNN", "SVM"],
    year: "2025",
    image: "/malaria.png",
  },
];

const featuredProject = projects.find((project) => project.featured);
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
            A selection of AI, automation, and machine learning projects.
          </p>
        </div>
      </section>

      {featuredProject && (
        <section className="border-b border-dark-70 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <p className="section-label mb-3">Featured</p>
              <h2 className="font-display text-4xl font-extrabold">
                {featuredProject.title}
              </h2>
            </div>

            <article
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
                    target={
                      featuredProject.link === "#" ? undefined : "_blank"
                    }
                    rel={
                      featuredProject.link === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="inline-block border border-orange px-6 py-3 text-xs font-display tracking-widest text-orange uppercase transition-all hover:bg-orange hover:text-white"
                  >
                    {featuredProject.linkLabel}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="section-label mb-3">Projects</p>
            <h2 className="font-display text-4xl font-extrabold">
              More work
            </h2>
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
                    rel={
                      project.link === "#" ? undefined : "noopener noreferrer"
                    }
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
