import { summary } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Career summary" title="About" />
          <p className="mt-6 max-w-2xl text-base text-ink-soft leading-relaxed">{summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
