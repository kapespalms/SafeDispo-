import { Link, useRouter } from "@tanstack/react-router";
import psychdispoLogo from "@/assets/psychdispo-logo.png.asset.json";

export function SiteHeader() {
  const router = useRouter();
  const path = router.state.location.pathname;

  const tabClass = (to: string) =>
    `px-5 py-2.5 font-mono text-[11px] tracking-[0.22em] text-white transition-colors ${
      path === to ? "bg-blue-900" : "hover:bg-blue-700"
    }`;

  return (
    <header className="bg-white border-b border-border shrink-0">
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={psychdispoLogo.url}
            alt="PsychDispo"
            className="h-7 w-auto object-contain"
          />
        </Link>
        <span className="font-serif italic text-sm text-muted-foreground hidden sm:inline">
          Inspiring safer disposition
        </span>
      </div>

      {/* Tab bar */}
      <div className="bg-blue-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-14 flex gap-1">
          <Link to="/dispo" className={tabClass("/dispo")}>
            PSYCHDISPO · PLAN
          </Link>
          <Link to="/reference" className={tabClass("/reference")}>
            PSYCHREF · REVIEW
          </Link>
        </div>
      </div>
    </header>
  );
}
