"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden bg-surface-light">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="rounded-full bg-accent p-3 text-white shadow-lg transition-transform hover:scale-110"
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
              className="rounded-full bg-foreground p-3 text-background shadow-lg transition-transform hover:scale-110"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Featured
            </span>
          )}
        </div>
        <p className="mb-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        {project.longDescription && (
          <p className="mb-4 text-xs italic leading-relaxed text-accent/70">
            &ldquo;{project.longDescription}&rdquo;
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/50 bg-surface-light px-2 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="border-t border-border px-5 py-3">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
              >
                <FiGithub size={14} />
                Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
              >
                <FiArrowUpRight size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
