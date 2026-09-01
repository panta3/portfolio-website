import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Selected work" title="Projects" />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
            <article
              className="group rounded-2xl border border-line bg-bg-elevated p-8 transition-colors hover:border-accent/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display font-semibold text-xl sm:text-2xl text-ink">
                    {p.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line-bright text-ink-soft hover:text-accent hover:border-accent transition-colors"
                  >
                    <FaGithub size={15} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-accent-bright hover:bg-accent hover:text-[#04100e] transition-colors"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare size={9} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed">{p.description}</p>

              <ul className="mt-5 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
