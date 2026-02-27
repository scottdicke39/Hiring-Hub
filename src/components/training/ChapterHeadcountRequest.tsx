import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function ChapterHeadcountRequest() {
  const stages = [
    { name: "Triage", desc: "Recruiting reviews the request for completeness", color: "bg-fun-sky" },
    { name: "Finance Review", desc: "Added to CFO Friday review cycle", color: "bg-fun-amber" },
    { name: "Approved", desc: "Finance + executive sign-off complete", color: "bg-fun-emerald" },
    { name: "Opened in Ashby", desc: "Recruiter creates the job in Ashby, intake meeting scheduled", color: "bg-fun-violet" },
    { name: "Hired", desc: "Offer accepted, role filled", color: "bg-fun-coral" },
  ];

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-violet/10 text-fun-violet mb-3">
          Chapter 2
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Submitting a Headcount Request
        </h1>
        <p className="mt-2 text-muted-foreground">
          How to request a new hire or backfill — from submission to approval.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Two Ways to Submit</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-t-4 border-t-fun-emerald border-border/60">
            <CardContent className="pt-5">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-fun-emerald/10 text-fun-emerald mb-2">Recommended</span>
              <h3 className="font-bold">Web Form</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Use the headcount request web form for the best experience with all fields, validation, and automatic routing.
              </p>
              <p className="mt-2 text-sm font-bold text-primary">
                Ask your recruiter for the request form link →
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-fun-sky border-border/60">
            <CardContent className="pt-5">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-fun-sky/10 text-fun-sky mb-2">Quick</span>
              <h3 className="font-bold">Slack Command</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Use the <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono">/request-headcount</code> slash command via the <strong className="text-foreground">RecruitingIQ</strong> Slack app.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Approval Stages</h2>
        <div className="space-y-3">
          {stages.map((stage, i) => (
            <div key={stage.name} className="flex items-start gap-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${stage.color} text-white text-sm font-bold`}>
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-foreground">{stage.name}</p>
                <p className="text-sm text-muted-foreground">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Key Details</h2>
        <div className="space-y-2">
          {[
            "CFO Friday: Finance reviews new headcount requests weekly on Fridays",
            "FIN ID Fast-Track: If Finance has already assigned a FIN ID, the request can skip the Finance Review stage",
            "Notifications: You'll receive Slack updates as your request moves through each stage",
            'Backfills: Select "Backfill" as the request type and note who is being replaced',
            "Timeline: Expect 2–3 weeks from submission to a role being opened in Ashby",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-fun-emerald" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
