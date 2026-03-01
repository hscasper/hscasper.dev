"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  Frameworks: "</>",
  "Tools & Infrastructure": "$_",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I reach for every day."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm text-accent">
                  {categoryIcons[category.name] ?? ">>"}
                </span>
                <h3 className="font-heading text-lg font-semibold">{category.name}</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-lg border border-border/50 bg-surface-light px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
