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
          subtitle="A little background on who I am and what I do."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column — bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-2xl bg-surface-light">
              <span className="text-6xl">👨‍💻</span>
            </div>

            <p className="text-lg leading-relaxed text-muted">
              {siteConfig.bio}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              
            </p>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
              <svg
                className="h-4 w-4"
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

          {/* Right column — experience timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xl font-semibold">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" />
                  {i < experience.length - 1 && (
                    <div className="absolute left-[3px] top-4 h-full w-px bg-border" />
                  )}
                  <p className="text-sm text-muted">{exp.period}</p>
                  <h4 className="mt-1 font-semibold">{exp.role}</h4>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
