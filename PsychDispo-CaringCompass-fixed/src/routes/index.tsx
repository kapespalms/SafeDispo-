import { createFileRoute, Link } from "@tanstack/react-router";
import { repositories } from "@/data/repositories";
import psychdispoLogo from "@/assets/psychdispo-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
      meta: [
        { title: "PsychDispo · Clinical Index" },
        {
          name: "description",
          content:
            "A two-repository clinical index for psychiatry: resources and references.",
        },
      ],
    }),
    component: Index,
  });

  function Index() {
    const [workflow, reference] = repositories;

    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Top card + split screen */}
        <main className="flex-1 flex flex-col">
          <div className="bg-white px-8 md:px-14 py-10 md:py-14">
            <div className="max-w-[1440px] mx-auto">
              <img
                src={psychdispoLogo.url}
                alt="PsychDispo"
                className="h-10 md:h-14 w-auto object-contain"
              />
              <p className="mt-1 font-serif text-[22px] md:text-[28px] leading-snug text-foreground">
                Psychiatric disposition and resource navigation
              </p>
              <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                Evidence-informed tools for risk assessment, discharge planning, community resources, and high-yield psychiatry review.
              </p>
            </div>
          </div>

          <div className="border-b border-border bg-white">
            <div className="max-w-[1440px] mx-auto px-8 md:px-14 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-4 py-2 bg-white border border-blue-800 text-blue-800 text-sm font-medium rounded-sm transition-colors hover:bg-blue-50 w-full sm:w-auto"
              >
                About
              </Link>
              <a
                href="mailto:KristenPalmerMD@gmail.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-white border border-blue-800 text-blue-800 text-sm font-medium rounded-sm transition-colors hover:bg-blue-50 w-full sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex-1 border-t border-border">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
              <RepoPanel
                to="/dispo"
                number={workflow.number}
                eyebrow="Repository — Dispo"
                title="Psych"
                titleAccent="Dispo"
                cta="Start Planning"
                tagline={workflow.tagline}
                description="Step-by-step: outpatient clinics, acute crisis contacts, psychotherapy options, and social considerations."
                categories={workflow.categories}
              />
              <RepoPanel
                to="/reference"
                number={reference.number}
                eyebrow="Repository — References"
                title="Psych"
                titleAccent="Ref"
                tagline={reference.tagline}
                description="Comprehensive psychiatry reference: psychopharmacology, algorithms, diagnosis, and assessment."
                categories={reference.categories}
                align="right"
                theme="blue"
              />
            </div>
          </div>
        </main>

        <footer className="border-t border-border">
          <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            <span>Reference only — not a substitute for clinical judgment</span>
            <span>Last Updated: June 2026</span>
          </div>
        </footer>
      </div>
    );
  }

function RepoPanel({
  to,
  number,
  eyebrow,
  title,
  titleAccent,
  cta = "Start Reviewing",
  tagline,
  description,
  categories,
  align = "left",
  theme = "default",
}: {
  to: string;
  number: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  cta?: string;
  tagline: string;
  description: string;
  categories: { id: string; ref: string; title: string; entries: unknown[] }[];
  align?: "left" | "right";
  theme?: "default" | "blue";
}) {
  const isBlue = theme === "blue";
  return (
    <Link
      to={to}
      className={`group relative block px-8 md:px-14 py-16 md:py-24 min-h-[640px] flex flex-col transition-colors ${
        isBlue
          ? "bg-blue-800 hover:bg-blue-700 text-white"
          : "hover:bg-surface-2"
      } ${align === "right" ? "md:text-left" : ""}`}
    >
      {/* Display title */}
      <h2 className="font-serif text-[64px] md:text-[88px] leading-[0.95] tracking-tight">
        {title}
        <br />
        <span
          className={`italic transition-colors ${
            isBlue
              ? "text-white/70 group-hover:text-white"
              : "text-muted-foreground/80 group-hover:text-foreground"
          }`}
        >
          {titleAccent}
        </span>
      </h2>

      {/* Enter cue — directly after title */}
      <div className="mt-6 flex items-center gap-3">
        <span className="font-mono text-[13px] tracking-[0.28em] group-hover:tracking-[0.36em] transition-all">
          {cta}
        </span>
        <span
          className={`h-px w-12 group-hover:w-24 transition-all ${
            isBlue ? "bg-white/70 group-hover:bg-white" : "bg-foreground"
          }`}
        />
        <span className="font-mono text-[14px]">→</span>
      </div>

      <p
        className={`mt-8 font-mono text-[11px] tracking-[0.22em] ${
          isBlue ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        {tagline}
      </p>

      <p
        className={`mt-6 max-w-md text-[15px] leading-relaxed ${
          isBlue ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>

      {/* Category index */}
      <ul className="mt-10 max-w-md">
        {categories.map((c) => (
          <li
            key={c.id}
            className={`flex items-baseline gap-4 py-2 border-t last:border-b ${
              isBlue ? "border-white/15" : "border-border"
            }`}
          >
            <span
              className={`font-mono text-[10px] tabular-nums ${
                isBlue ? "text-white/50" : "text-muted-foreground"
              }`}
            >
              {" "}
            </span>
            <span className="text-[13px]">{c.title}</span>
            <span
              className={`ml-auto font-mono text-[10px] ${
                isBlue ? "text-white/40" : "text-muted-foreground/60"
              }`}
            >
              {" "}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
