"use client";
import { useState } from "react";

const projects = [
  {
    title: "AFIT Admission Assistant",
    category: "Machine Learning",
    description:
      "AI-powered conversational assistant for navigating AFIT admission processes. Built with Python and deployed interactively.",
    link: "https://www.loom.com/share/29575ac8814c46d6bb0211ae0214a095?sid=9af96492-d5cf-4231-8592-94f7b9c73722",
    linkLabel: "Watch Demo",
    tags: ["Python", "NLP", "AI"],
    year: "2025",
    image: "/afitassistant.png",
  },
  {
    title: "Breast Cancer Prediction Model",
    category: "Machine Learning",
    description:
      "Diagnostic ML model deployed on Streamlit. Uses classification algorithms trained on medical datasets to assist early screening.",
    link: "https://svdeeqbreastcancermodel.streamlit.app/",
    linkLabel: "Live App",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    year: "2025",
     image: "/bcancer.png",
  },
  {
    title: "Malaria Diagnosis Model",
    category: "Machine Learning",
    description:
      "Pattern recognition model for malaria diagnosis. Trained and evaluated using KNN and SVM classifiers on clinical data.",
    link: "#",
    linkLabel: "Coming Soon",
    tags: ["Python", "KNN", "SVM"],
    year: "2025",
     image: "/malaria.png",
  },
];

const filters = ["All", "Machine Learning", "Web Development", "Java"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">My Work</p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl mb-6">
            Portfolio
          </h1>
          <p className="text-dark-30 max-w-xl text-base leading-relaxed">
            A selection of projects across machine learning, software
            engineering, and web development.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-dark-70 sticky top-16 bg-dark-100/95 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 flex gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-display tracking-widest uppercase px-5 py-2 border transition-all ${
                active === f
                  ? "border-orange text-orange"
                  : "border-dark-60 text-dark-40 hover:border-white hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-dark-40 font-display text-sm tracking-widest uppercase">
                No projects in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="card-glow group border border-dark-70 bg-dark-85 flex flex-col"
                >
                  {/* Top color bar */}
                  <div className="h-1 bg-dark-70 group-hover:bg-orange transition-colors" />

                  <div className="w-full h-48 overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-display tracking-widest uppercase text-orange">
                        {project.category}
                      </span>
                      <span className="text-xs text-dark-40 font-display">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="font-display font-700 text-xl mb-3 group-hover:text-orange transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-dark-30 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-display tracking-wider uppercase px-3 py-1 border border-dark-60 text-dark-40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display tracking-widest uppercase text-dark-40 group-hover:text-orange transition-colors border-t border-dark-70 pt-4"
                    >
                      {project.linkLabel} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
