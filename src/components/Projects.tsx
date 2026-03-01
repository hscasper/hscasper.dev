"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories } from "@/lib/data";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built and shipped."
        />

        {/* Filter tabs */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-surface-light text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
