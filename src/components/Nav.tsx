"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { person } from "@/data/resume";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold tracking-wide text-sm text-ink hover:text-accent transition-colors"
        >
          AP<span className="text-accent">.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-ink-soft">
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedin size={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}
