"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig, socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:border-foreground hover:text-foreground"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.icon === "FiGithub" && <FiGithub size={20} />}
              {link.icon === "FiLinkedin" && <FiLinkedin size={20} />}
              {link.icon === "FiMail" && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
