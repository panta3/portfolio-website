import Image from "next/image";
import { education, coursework } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading title="Education" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 rounded-2xl border border-line bg-bg-elevated p-8">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-white p-2.5">
                <Image
                  src="/logos/mcmaster.jpg"
                  alt="McMaster University logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink">
                    {education.program}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{education.period}</span>
                </div>
                <p className="mt-1 text-accent-bright text-sm">{education.school}</p>
                <p className="mt-1 text-ink-faint text-sm">{education.detail}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
