import { siteConfig, navLinks, socialLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="text-lg font-bold tracking-tight">
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6">
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
          </ul>
        </nav>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}.
        </p>
      </div>
    </footer>
  );
}
