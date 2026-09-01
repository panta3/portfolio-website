// Domain color system — cyan tags Cloud Security work, violet tags
// AI/ML, amber tags full-stack/frameworks. Applied consistently across
// Projects and Skills so color carries meaning instead of being
// decorative. Class strings are written out in full (not built via
// template interpolation) so Tailwind's static scanner picks them up.
export type DomainColor = "cyan" | "violet" | "amber";

export const domainTheme: Record<
  DomainColor,
  {
    text: string;
    textHover: string;
    border: string;
    borderHover: string;
    badgeBg: string;
    badgeText: string;
    dot: string;
    glowVar: string;
  }
> = {
  cyan: {
    text: "text-accent",
    textHover: "hover:text-accent",
    border: "border-accent/30",
    borderHover: "hover:border-accent/60",
    badgeBg: "bg-accent-soft",
    badgeText: "text-accent-bright",
    dot: "bg-accent",
    glowVar: "var(--glow)",
  },
  violet: {
    text: "text-violet",
    textHover: "hover:text-violet",
    border: "border-violet/30",
    borderHover: "hover:border-violet/60",
    badgeBg: "bg-violet-soft",
    badgeText: "text-violet-bright",
    dot: "bg-violet",
    glowVar: "var(--violet-glow)",
  },
  amber: {
    text: "text-amber",
    textHover: "hover:text-amber",
    border: "border-amber/30",
    borderHover: "hover:border-amber/60",
    badgeBg: "bg-amber-soft",
    badgeText: "text-amber-bright",
    dot: "bg-amber",
    glowVar: "var(--amber-glow)",
  },
};
