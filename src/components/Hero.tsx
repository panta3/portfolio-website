import { FaArrowRight, FaFileArrowDown } from "react-icons/fa6";
import { person, education } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 grid-field pointer-events-none" />
      <div
        className="absolute top-16 left-1/2 translate-x-[-62%] w-140 h-140 rounded-full opacity-30 pointer-events-none blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />
      <div
        className="absolute top-32 left-1/2 translate-x-[-38%] w-115 h-115 rounded-full opacity-20 pointer-events-none blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--violet), transparent)" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          {education.school} &middot; 4th Year
        </p>

        <h1 className="font-display font-semibold text-5xl sm:text-7xl leading-[1.05] tracking-tight text-glow">
          {person.name}
        </h1>

        <p className="mt-6 font-mono text-sm sm:text-base uppercase tracking-widest">
          <span className="text-accent-bright">AI/ML Engineering</span>
          <span className="text-ink-faint"> &amp; </span>
          <span className="text-violet-bright">Cloud Security</span>
        </p>

        <p className="mt-6 max-w-xl mx-auto text-ink-soft text-base sm:text-lg leading-relaxed">
          {person.tagline}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#04100e] font-medium hover:bg-accent-bright transition-colors"
          >
            View Projects
            <FaArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/aarav-pant-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-violet-bright hover:border-violet hover:bg-violet-soft transition-colors"
          >
            <FaFileArrowDown size={12} />
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line-bright px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink hover:border-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
