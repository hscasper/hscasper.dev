"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
