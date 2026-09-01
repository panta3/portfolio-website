import { summary, certifications } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl grid gap-12 sm:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="Career summary" title="About" />
          <p className="mt-6 text-base text-ink-soft leading-relaxed">{summary}</p>
        </Reveal>

        <Reveal delay={100} className="sm:pt-18">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint mb-4">
            Certifications
          </p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-lg border border-line bg-bg-elevated px-4 py-3">
                <p className="text-sm text-ink">{c.name}</p>
                <p className="mt-0.5 font-mono text-xs text-accent-bright">{c.status}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
