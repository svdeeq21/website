import Link from "next/link";

const stack = {
  "AI Engineering": [
    "LLM Applications", "AI Agents", "Agentic Workflows", "Prompt Engineering",
    "Context Engineering", "RAG Systems", "Function & Tool Calling",
    "Structured Outputs", "Conversation Memory", "Multi-Agent Systems",
  ],
  "Backend Development": [
    "FastAPI", "REST APIs", "Async Python", "Webhooks",
    "Authentication", "API Design", "PostgreSQL", "Supabase", "pgvector",
  ],
  "Automation & Integrations": [
    "WhatsApp Automation (Evolution API)", "Email Automation", "Paystack",
    "CRM Automation", "Workflow Automation", "Business Process Automation",
  ],
  "Infrastructure & Tools": [
    "Docker", "Railway", "Render", "Vercel", "Git", "GitHub", "Linux",
  ],
  "Frontend": [
    "Next.js 14", "React", "TypeScript", "Tailwind CSS",
  ],
  "Languages": [
    "Python (Primary)", "TypeScript", "Java (Academic)",
  ],
};

const timeline = [
  {
    year: "2023",
    title: "Foundation",
    desc: "Began programming with Java and Python. Completed core CS coursework at AFIT. Built first automation scripts and ML experiments.",
  },
  {
    year: "2024",
    title: "First Products",
    desc: "Built first WhatsApp AI bot. Founded Hooze Enterprises. Shipped StudyApp, RAG knowledge assistant, and outbound email acquisition system.",
  },
  {
    year: "2025",
    title: "Production Scale",
    desc: "Launched WhatsApp AI Sales CRM for Praise Dynasty Realty (Abuja). Built commerce-chat WhatsApp e-commerce platform. Led multi-sprint production deployments.",
  },
  {
    year: "2026",
    title: "Now",
    desc: "Leading development of Clinical Clarity (health tech). Expanding Hooze Enterprises AI automation services. Completing CS degree at AFIT.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">About</p>
            <h1 className="font-display font-800 text-5xl sm:text-6xl mb-6">
              Sadiq Shehu<br />
              <span className="text-orange">Musa</span>
            </h1>
            <p className="text-dark-30 text-base leading-relaxed mb-6">
              AI Engineer and founder of Hooze Enterprises — an AI and automation company building
              intelligent software systems that help businesses automate operations, engage customers,
              and scale with AI.
            </p>
            <p className="text-dark-30 text-base leading-relaxed mb-10">
              I specialize in production AI systems: agents, LLM-powered backends, WhatsApp automation,
              RAG pipelines, and AI SaaS products. My work spans the full stack — from system design
              and prompt engineering through FastAPI backends, Next.js frontends, and cloud deployment.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
              >
                Work With Me
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border border-dark-60 text-xs font-display tracking-widest uppercase hover:border-white transition-colors"
              >
                See Projects
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden border border-dark-70 h-[400px]">
              <img src="/profile.png" alt="Sadiq Shehu Musa" className="w-full h-full object-cover object-center" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Years Building" },
                { value: "6+", label: "Live Products" },
                { value: "2027", label: "AFIT CS Grad" },
              ].map((stat) => (
                <div key={stat.label} className="card-glow border border-dark-70 bg-dark-85 p-6 text-center">
                  <div className="font-display font-800 text-2xl text-orange mb-1">{stat.value}</div>
                  <div className="text-xs text-dark-30 uppercase tracking-widest font-display">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Identity / What I do */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Identity</p>
          <h2 className="font-display font-800 text-4xl mb-12">What I actually do</h2>
          <div className="grid lg:grid-cols-3 gap-px bg-dark-70">
            {[
              {
                title: "Build AI Products",
                desc: "I take foundation models and build reliable, production-ready products around them — not demos, but systems businesses actually depend on daily.",
              },
              {
                title: "Automate Business Operations",
                desc: "WhatsApp bots, CRM workflows, email pipelines, fulfillment systems — I turn repetitive business processes into intelligent automated workflows.",
              },
              {
                title: "Ship Full-Stack",
                desc: "From system architecture and FastAPI backend to Next.js frontend and cloud deployment. I own the full build, not just one layer.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-dark-100 p-10 hover:bg-dark-85 transition-colors">
                <h3 className="font-display font-700 text-xl mb-4 text-orange">{item.title}</h3>
                <p className="text-dark-30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Journey</p>
          <h2 className="font-display font-800 text-4xl mb-16">Timeline</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`grid lg:grid-cols-[120px_1fr] gap-8 p-8 border border-dark-70 ${i > 0 ? "border-t-0" : ""} hover:bg-dark-85 transition-colors group`}
              >
                <div className="font-display font-800 text-2xl text-dark-60 group-hover:text-orange transition-colors">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg mb-2">{item.title}</h3>
                  <p className="text-dark-30 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Skills</p>
          <h2 className="font-display font-800 text-4xl mb-16">Technical Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(stack).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-display font-700 text-xs tracking-widest uppercase text-orange mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-display tracking-wide px-3 py-1.5 border border-dark-60 text-dark-40 hover:border-orange hover:text-orange transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-4">Education</p>
            <h2 className="font-display font-800 text-3xl mb-8">Academic</h2>
            <div className="card-glow border border-dark-70 bg-dark-85 p-8">
              <div className="text-xs font-display tracking-widest uppercase text-orange mb-3">
                Current
              </div>
              <h3 className="font-display font-700 text-xl mb-2">
                B.Sc. Computer Science
              </h3>
              <p className="text-dark-30 text-sm mb-1">Air Force Institute of Technology (AFIT)</p>
              <p className="text-dark-40 text-xs font-display tracking-wide">Kaduna, Nigeria · Expected 2027</p>
            </div>
          </div>
          <div>
            <p className="section-label mb-4">Venture</p>
            <h2 className="font-display font-800 text-3xl mb-8">Hooze Enterprises</h2>
            <div className="card-glow border border-dark-70 bg-dark-85 p-8">
              <div className="text-xs font-display tracking-widest uppercase text-orange mb-3">
                Founder & AI Engineer
              </div>
              <p className="text-dark-30 text-sm leading-relaxed">
                AI and automation company building intelligent products for Nigerian SMBs and global clients.
                Services span AI agents, WhatsApp automation, SaaS products, and AI consulting.
                Active clients across real estate, e-commerce, and health sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-4xl mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-dark-30 mb-10 max-w-md mx-auto text-sm">
            Open for freelance projects, consulting, and product collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
