import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { experience } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading title="Experience" />
        </Reveal>

        <ol className="relative mt-14 border-l border-line pl-8 space-y-14">
          {experience.map((e, i) => (
            <li key={e.org + e.role + e.period} className="relative">
              <span className="absolute -left-9.25 top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" />

              <Reveal delay={i * 60}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {e.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{e.period}</span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-accent-bright text-sm">
                  <span>{e.org}</span>
                  {e.link && (
                    <a
                      href={e.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-ink-faint hover:text-accent transition-colors"
                    >
                      <FaArrowUpRightFromSquare size={10} />
                    </a>
                  )}
                  <span className="text-ink-faint text-xs">&middot; {e.location}</span>
                </div>

                {e.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
