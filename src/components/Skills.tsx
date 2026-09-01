import { skillGroups } from "@/data/resume";
import { skillIcons } from "@/data/skillIcons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="Toolbox" title="Skills" />
        </Reveal>

        <div className="mt-14 space-y-10">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-line bg-bg-elevated px-3.5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent/50 hover:text-ink"
                    >
                      {Icon && <Icon size={15} className="text-accent shrink-0" />}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
