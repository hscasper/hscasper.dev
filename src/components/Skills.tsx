"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with on a daily basis."
        />

        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">{category.name}</h3>
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
                    className="rounded-lg bg-surface-light px-3 py-1.5 text-sm text-muted transition-colors hover:bg-accent/10 hover:text-accent"
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
