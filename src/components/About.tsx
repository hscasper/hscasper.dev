"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { siteConfig, experience } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="The short version of a long story."
        />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 relative h-48 w-48 overflow-hidden rounded-2xl border border-border bg-surface-light">
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5"><span class="font-heading text-4xl font-bold text-accent">${siteConfig.name.split(" ").map(n => n[0]).join("")}</span></div>`;
                }}
              />
            </div>

            <p className="text-lg leading-relaxed text-muted">
              {siteConfig.bio}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I got hooked on programming by trying to automate things I was too
              lazy to do manually. That curiosity turned into a love for
              building, from low-level systems in C++ to full-stack apps
              with React and .NET. When I&apos;m not coding, I&apos;m probably
              exploring a new framework or reading about distributed systems.
            </p>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
            >
              Download Resume
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 font-heading text-x1 font-semibold">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="group relative rounded-xl border border-transparent pl-6 transition-all hover:border-border hover:bg-surface-light/50 hover:p-4 hover:pl-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
        
                  {i < experience.length - 1 && (
                    <div className="absolute left-[4.5px] top-5 h-full w-px bg-border" />
                  )}
                  <p className="font-mono text-xs text-accent">{exp.period}</p>
                  <h4 className="mt-1 font-heading font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
