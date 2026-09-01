import { coursework } from "@/data/resume";
import Reveal from "@/components/Reveal";

export default function Coursework() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
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
        </Reveal>
      </div>
    </section>
  );
}
