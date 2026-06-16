import { createFileRoute } from "@tanstack/react-router";

// Connects the landing-page "Psych Dispo · Start Planning" door to the full
// guided disposition tool. The tool is a self-contained file in /public.
// ?embed=1 hides the tool's own header/tabs so the Lovable shell owns navigation.
// #plan opens the disposition workflow (use #ref for the reference view).

export const Route = createFileRoute("/dispo")({
  head: () => ({
    meta: [
      { title: "Psych Dispo · SafeDispo" },
      {
        name: "description",
        content:
          "Guided psychiatric disposition workflow: safety screening, level of care, interventions, verified Columbus & Cleveland referrals, and a printable discharge packet.",
      },
    ],
  }),
  component: DispoPage,
});

function DispoPage() {
  return (
    <iframe
      src="/psychdispo.html?embed=1#plan"
      title="Psych Dispo — disposition workflow"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
