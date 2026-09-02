import { certifications, completedCertifications } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading title="Certifications" />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
            In Progress
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-line bg-bg-elevated px-4 py-3"
              >
                <p className="text-sm text-ink">{c.name}</p>
                <p className="mt-1 font-mono text-xs text-accent-bright">{c.status}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
            Completed
          </p>
          <div className="flex flex-wrap gap-2">
            {completedCertifications.map((c) => (
              <div
                key={c.name}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
              >
                {c.name}
                <span className="text-ink-faint"> · {c.issuer}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
