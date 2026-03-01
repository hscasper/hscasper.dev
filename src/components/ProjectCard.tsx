"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-surface-light">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="rounded-full bg-accent p-3 text-white transition-transform hover:scale-110"
            >
              <FiExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
              className="rounded-full bg-foreground p-3 text-background transition-transform hover:scale-110"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
              Featured
            </span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-light px-2 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
