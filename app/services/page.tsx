import Link from "next/link";

const services = [
  {
    id: "01",
    title: "ML Model Development",
    type: "Scoped Deliverable",
    price: "Custom Quote",
    description:
      "End-to-end machine learning pipeline development. From raw data to trained, evaluated, and deployed model. Includes data preprocessing, feature engineering, model selection, training, and deployment via Streamlit or API.",
    deliverables: [
      "Cleaned & preprocessed dataset",
      "Trained and evaluated model",
      "Streamlit dashboard or REST API",
      "Documentation & walkthrough",
    ],
    tags: ["Python", "Scikit-learn", "Streamlit", "Prophet"],
  },
  {
    id: "02",
    title: "Java Application Development",
    type: "Scoped Deliverable",
    price: "Custom Quote",
    description:
      "Object-oriented Java applications built with clean architecture principles. Desktop tools, data processing utilities, algorithm implementations, and GUI applications using Java Swing.",
    deliverables: [
      "Fully functional Java application",
      "Source code with documentation",
      "OOP-structured, maintainable codebase",
      "Testing and error handling",
    ],
    tags: ["Java", "OOP", "Java Swing", "Data Structures"],
  },
  {
    id: "03",
    title: "Web Development",
    type: "Fixed Price",
    price: "Contact for Pricing",
    description:
      "Responsive, semantic, and lightweight web interfaces. HTML/CSS-first approach with zero bloat. Optimized for performance, accessibility, and consistent cross-platform behavior.",
    deliverables: [
      "Responsive multi-page website",
      "Semantic HTML & clean CSS",
      "Mobile-first design",
      "Performance-optimized build",
    ],
    tags: ["HTML", "CSS", "Next.js", "Responsive Design"],
  },
  {
    id: "04",
    title: "Data Engineering & Automation",
    type: "Scoped Deliverable",
    price: "Custom Quote",
    description:
      "Automation pipelines for data collection, transformation, and integration. Python scripts and API integrations to streamline dataset preparation and support ML workflows.",
    deliverables: [
      "Automated data pipeline",
      "API integration scripts",
      "Cleaned, structured datasets",
      "Documentation and usage guide",
    ],
    tags: ["Python", "APIs", "Pandas", "NumPy"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "You describe your problem. I ask the right questions to understand scope, constraints, and success criteria.",
  },
  {
    step: "02",
    title: "Scoping",
    desc: "I produce a clear breakdown of deliverables, timeline, and pricing. No vague estimates.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "I build with regular check-ins. You see progress before the final delivery.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Clean handoff with documentation. I don't disappear after delivery.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">What I Offer</p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl mb-6">
            Services &<br />
            <span className="text-orange">Pricing</span>
          </h1>
          <p className="text-dark-30 max-w-xl text-base leading-relaxed">
            I work on a project basis. Every engagement starts with a clear
            scope, defined deliverables, and honest timelines — no surprises.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-glow border border-dark-70 bg-dark-85 p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-800 text-4xl text-dark-60">
                  {service.id}
                </span>
                <span className="text-xs font-display tracking-widest uppercase text-orange border border-orange px-3 py-1">
                  {service.type}
                </span>
              </div>

              <h2 className="font-display font-700 text-2xl mb-3">
                {service.title}
              </h2>
              <p className="text-dark-30 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mb-8">
                <p className="text-xs font-display tracking-widest uppercase text-dark-40 mb-4">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 text-sm text-dark-30"
                    >
                      <span className="w-1 h-1 bg-orange rounded-full shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-display tracking-wider uppercase px-3 py-1 border border-dark-60 text-dark-40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-dark-70">
                <span className="font-display font-700 text-lg text-white">
                  {service.price}
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-display tracking-widest uppercase text-orange border border-orange px-5 py-2 hover:bg-orange hover:text-white transition-all"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="font-display font-800 text-4xl mb-16">
            The Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark-70">
            {process.map((p) => (
              <div key={p.step} className="bg-dark-100 p-8 hover:bg-dark-85 transition-colors group">
                <div className="font-display font-800 text-4xl text-dark-60 mb-6 group-hover:text-orange transition-colors">
                  {p.step}
                </div>
                <h3 className="font-display font-700 text-base mb-3">{p.title}</h3>
                <p className="text-dark-30 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-dark-70">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-4xl mb-4">
            Not sure what you need?
          </h2>
          <p className="text-dark-30 mb-10 max-w-md mx-auto">
            Send me a message describing your problem. I&apos;ll tell you if
            and how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
