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
    desc: "Launched the multi-tenant Hooze CRM (pd-crm-backend) for Praise Dynasty Realty in Abuja — sprint by sprint from Sprint 0 through Sprint 9: FastAPI foundation, Evolution API WhatsApp layer, Gemini→Groq→HuggingFace AI fallback chain, pgvector RAG over property listings, a full lead conversation state machine, billing with Paystack, and a Next.js dashboard. Built commerce-chat, a WhatsApp-native checkout platform, in parallel.",
  },
  {
    year: "2025 — Q4",
    title: "The Audit That Changed How I Build",
    desc: "Built a Sales Progression Engine on top of the CRM — playbooks, a rules engine, Next Best Action logic, and a cron-triggered scheduler running on GitHub Actions. Then I audited my own system properly, across 220 real leads and 7,293 real messages. The audit surfaced hard truths — the bot denying it was AI when asked directly, a duplicate-message race condition, vendor contacts being engaged as prospects, and 88% of leads never leaving COLD state. I rebuilt the trust layer, the dedup logic, and the lead segmentation from the ground up. That audit is the reason I trust my systems today.",
  },
  {
    year: "2026",
    title: "Now",
    desc: "Running a full sprint relay on Hooze AI — the studio's own product — through Sprints 2 through 9: the flow engine, AI gateway, output formatting, refinement layer, rate limiting, sixteen analytics event types, CI/CD via GitHub Actions, and a live Vercel deployment. Finalized the Clinical Clarity pre-production plan (React Native, offline-first, explicit V1 success criteria). Built a systematic market-validation system to test new niches before committing to a pivot. Upgrading the Hooze Enterprises brand system across every property. Completing my CS degree at AFIT.",
  },
];

const certifications = [
  {
    title: "AI & Automation",
    issuer: "TS Academy",
    meta: "3-month training programme · Certified July 05, 2026",
    image: "/certs/ts-academy-ai-automation.png",
    verify: "https://tsacademyonline.com",
    id: "TSQ2SPUN3LMB8H",
  },
  {
    title: "Java Programming — Beginner to Advanced",
    issuer: "AQskill",
    meta: "Certificate of Completion · June 10, 2025",
    image: "/certs/aqskill-java.jpg",
    verify: "https://www.aqskill.org/verify",
    id: "189101A40634",
  },
  {
    title: "Python Programming Mega Course",
    issuer: "AQskill",
    meta: "Certificate of Completion · June 13, 2025",
    image: "/certs/aqskill-python.jpg",
    verify: "https://www.aqskill.org/verify",
    id: "185941A40634",
  },
];

const vision = [
  {
    title: "Hooze CRM, everywhere WhatsApp is business",
    desc: "Take the multi-tenant WhatsApp sales OS proven on Praise Dynasty Realty and make it the default conversational sales layer for African SMBs — real estate today, more verticals validated and onboarded next.",
  },
  {
    title: "Clinical Clarity, closing the adherence gap",
    desc: "An offline-first medication management app built for how Nigerian clinics actually operate — patchy connectivity, overworked staff, patients who need a WhatsApp nudge, not another app to remember.",
  },
  {
    title: "Hooze AI, enterprise automation for the solo operator",
    desc: "A done-for-you layer that gives small business owners the booking assistants, lead pipelines, and follow-up systems that used to cost agency money and agency timelines — live in 14 days.",
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

      {/* Certifications */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Proof of Work</p>
          <h2 className="font-display font-800 text-4xl mb-4">Certifications</h2>
          <p className="text-dark-30 text-sm leading-relaxed max-w-2xl mb-16">
            Structured learning behind the shipped work — Java, Python, and applied AI &amp; automation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="card-glow border border-dark-70 bg-dark-85 overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden border-b border-dark-70">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-display tracking-widest uppercase text-orange mb-2">
                    {cert.issuer}
                  </div>
                  <h3 className="font-display font-700 text-base mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-dark-30 text-xs mb-4">{cert.meta}</p>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-xs font-display tracking-widest uppercase text-dark-40 hover:text-orange transition-colors border-t border-dark-70 pt-4"
                  >
                    Verify · ID {cert.id} →
                  </a>
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

      {/* Vision */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Where This Is Going</p>
          <h2 className="font-display font-800 text-4xl mb-4">Vision</h2>
          <p className="text-dark-30 text-sm leading-relaxed max-w-2xl mb-16">
            I&apos;m not building isolated projects — I&apos;m building toward a specific future for
            Hooze Enterprises. Three products carry that vision right now.
          </p>
          <div className="grid lg:grid-cols-3 gap-px bg-dark-70">
            {vision.map((item) => (
              <div key={item.title} className="bg-dark-100 p-10 hover:bg-dark-85 transition-colors">
                <h3 className="font-display font-700 text-lg mb-4 text-orange">{item.title}</h3>
                <p className="text-dark-30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
