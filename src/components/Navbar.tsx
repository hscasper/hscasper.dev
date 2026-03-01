"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-lg font-bold tracking-tight transition-colors hover:text-accent"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="relative z-50 md:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
            >
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center gap-8"
              >
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-2xl font-medium transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="rounded-lg bg-accent px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    Let&apos;s Talk
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
