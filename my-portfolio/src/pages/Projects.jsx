import React, { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "UI/UX Design"];

  const projectsData = [
    {
      id: 1,
      title: "LegallyAI",
      category: ["Mobile", "Web"],
      description:
        "A high-performance OCR platform that leverages RAG and Gemini AI to demystify complex legal jargon, making Filipino legal documents accessible and easy to understand.",
      tech: ["Flutter", "Python", "Flask", "Google Gemini", "RAG"],
      image: "/Projects/LegallyAI.jpg",
    },
    {
      id: 2,
      title: "TasteWise",
      category: ["Mobile"],
      description:
        "A context-aware recipe discovery app that utilizes real-time weather and location data to suggest the perfect meal for any environment.",
      tech: ["Flutter", "Spoonacular API", "Weather API", "Firebase"],
      image: "/Projects/TasteWise.jpg",
    },
    {
      id: 3,
      title: "Spacer",
      category: ["UI/UX Design"],
      description:
        "A scalable Figma design system and high-fidelity prototype tailored for rental space marketplaces, prioritizing seamless user navigation and booking flows.",
      tech: ["Figma", "Prototyping", "Wireframing"],
      image: "/Projects/Spacer.png",
    },
    {
      id: 4,
      title: "FunSign",
      category: ["UI/UX Design"],
      description:
        "An educational design system focused on accessibility, providing a structured and interactive UI for learning Filipino Sign Language (FSL).",
      tech: ["Figma", "Prototyping", "Wireframing"],
      image: "/Projects/FunSign.png",
    },
    {
      id: 5,
      title: "MPAJ Shop",
      category: ["Web"],
      description:
        "A full-stack e-commerce solution featuring secure checkout and inventory management for a streamlined merchandise shopping experience.",
      tech: ["Laravel", "MySQL"],
      image: "/Projects/MPAJ.jpg",
    },
    {
      id: 6,
      title: "PSU Urdaneta Student Organization Portal",
      category: ["Web"],
      description:
        "A centralized administrative hub designed to streamline event coordination, membership tracking, and activity logs for university organizations.",
      tech: ["Laravel", "MySQL"],
      image: "/Projects/OrgPortal.jpg",
    },
    {
      id: 7,
      title: "Fordago",
      category: ["UI/UX Design"],
      description:
        "A collaborative platform design that bridges the gap between tour guides and travel joiners through centralized activity scheduling and booking.",
      tech: ["Figma", "Prototyping", "Wireframing"],
      image: "/Projects/Fordago.jpg",
    },
  ];
  const filteredProjects = projectsData.filter((project) =>
    activeCategory === "All" ? true : project.category.includes(activeCategory),
  );

  return (
    <main className="flex-1 w-full px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <section className="mb-12">
        <h1 className="font-mono text-cyan-600 dark:text-[#00F5FF] text-2xl md:text-3xl mb-6">
          /featured_projects
        </h1>
        <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-light max-w-3xl">
          A selection of my recent work across different platforms and
          disciplines. Select a category below to filter the results.
        </p>
      </section>

      <section className="mb-12 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${activeCategory === category
              ? "bg-cyan-600 text-white dark:bg-[#00F5FF] dark:text-black font-bold"
              : "bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-[#1a1a1a] dark:text-white/40 dark:hover:text-white dark:hover:bg-[#262626]"
              }`}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-none border border-slate-200 dark:border-white/5 overflow-hidden hover:border-cyan-600 dark:hover:border-[#00F5FF] transition-colors duration-300"
          >
            <div className="h-64 overflow-hidden bg-slate-100 dark:bg-[#111]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-white/60 text-sm font-light leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-50 dark:bg-[#262626] text-pink-600 dark:text-[#e278b5] px-2.5 py-1 text-[10px] font-mono tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
