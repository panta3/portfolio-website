import { FaGithub, FaLinkedin, FaEnvelope, FaFileArrowDown } from "react-icons/fa6";
import { person } from "@/data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-6 pt-28 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-field pointer-events-none mask-[radial-gradient(ellipse_80%_60%_at_50%_100%,black_40%,transparent_100%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Let&apos;s talk</p>
        <h2 className="mt-4 font-display font-semibold text-3xl sm:text-5xl text-ink text-glow">
          Building something?
          <br />
          Let&apos;s connect.
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#04100e] font-medium hover:bg-accent-bright transition-colors"
          >
            <FaEnvelope size={13} />
            {person.email}
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-bright px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink hover:border-accent transition-colors"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-bright px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink hover:border-accent transition-colors"
          >
            <FaGithub size={14} />
            GitHub
          </a>
          <a
            href="/aarav-pant-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-violet-bright hover:border-violet hover:bg-violet-soft transition-colors"
          >
            <FaFileArrowDown size={14} />
            Resume
          </a>
        </div>

        <p className="mt-16 font-mono text-[11px] text-ink-faint">
          {person.location} &middot; {person.phone}
        </p>
        <p className="mt-2 font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
