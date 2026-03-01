"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SectionHeading } from "./SectionHeading";
import { siteConfig, socialLinks } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

const socialIcons: Record<string, React.ReactNode> = {
  FiGithub: <FiGithub size={20} />,
  FiLinkedin: <FiLinkedin size={20} />,
  FiMail: <FiMail size={20} />,
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // TODO: Replace with Formspree/Web3Forms endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's work together."
        />

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold">
              Let&apos;s build something great.
            </h3>
            <p className="mb-6 leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something meaningful. Drop me a
              message and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="rounded-lg border border-border p-3 text-muted transition-all hover:border-accent hover:text-accent"
                >
                  {socialIcons[link.icon] ?? link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-surface p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <FiSend className="text-accent" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Message Sent!</h4>
                  <p className="mt-2 text-muted">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-accent transition-colors hover:text-accent-hover"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-border bg-surface p-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-surface-light px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-surface-light px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-lg border bg-surface-light px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Send Message
                  <FiSend size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
