import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageSquare, Users, FileCheck } from "lucide-react";

const responsibilities = [
  {
    icon: Clock,
    title: "Timely Interview Feedback",
    detail: "Submit your interview scorecard in Ashby within 24 hours of each interview. Quick feedback keeps the process moving and signals respect for candidates' time.",
    color: "bg-fun-coral/10 text-fun-coral",
  },
  {
    icon: Users,
    title: "Debrief Participation",
    detail: "Attend the debrief meeting for every candidate who completes the interview loop. Come prepared with your scorecard submitted and specific examples to discuss.",
    color: "bg-fun-sky/10 text-fun-sky",
  },
  {
    icon: MessageSquare,
    title: "Offer Collaboration",
    detail: "Work with your recruiter to build competitive offers. Provide input on level, scope, and team context that helps make the offer compelling.",
    color: "bg-fun-emerald/10 text-fun-emerald",
  },
  {
    icon: FileCheck,
    title: "Intake Meeting Partnership",
    detail: "Come to the intake meeting prepared with your competency priorities, ideal candidate profile, and interview panel preferences. This sets the entire search up for success.",
    color: "bg-fun-violet/10 text-fun-violet",
  },
];

export function ChapterHiringManagerRole() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-amber/10 text-fun-amber mb-3">
          Chapter 6
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Your Role as Hiring Manager
        </h1>
        <p className="mt-2 text-muted-foreground">
          What we need from you to run a great hiring process together.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Key Responsibilities</h2>
        <div className="space-y-3">
          {responsibilities.map((r) => (
            <Card key={r.title} className="border-border/60">
              <CardContent className="pt-5">
                <div className="flex items-start gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${r.color}`}>
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Requesting a LinkedIn Recruiter Seat</h2>
        <Card className="border-border/60">
          <CardContent className="pt-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you'd like direct access to LinkedIn Recruiter to help source candidates for your open roles, 
              you can request a seat. Reach out to <strong className="text-foreground">your Talent Leadership contact</strong> with:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-sky" />
                Which roles you need to source for
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-sky" />
                How frequently you plan to use it
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-sky" />
                Your LinkedIn profile URL
              </li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Seats are limited, so we allocate them based on active hiring volume and demonstrated sourcing activity.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Navigating Ashby as a Hiring Manager</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ashby is your home base for everything recruiting. Here are the key areas you'll use most:
        </p>
        <div className="space-y-2">
          {[
            { area: "Home Page", desc: "Your landing pad — access interview briefings, tasks, and submit referrals", color: "bg-fun-indigo" },
            { area: "Jobs Dashboard", desc: "High-level view of all your active roles, accessible at Jobs → Dashboard", color: "bg-fun-emerald" },
            { area: "Candidate Pipeline", desc: "See candidates across all your positions and quickly move between stages", color: "bg-fun-coral" },
            { area: "Application Review", desc: "Bulk-review candidates — advance or archive with structured feedback", color: "bg-fun-violet" },
          ].map((item) => (
            <div key={item.area} className="rounded-xl border p-4 flex items-start gap-3">
              <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
              <div>
                <p className="font-bold text-foreground text-sm">{item.area}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://docs.ashbyhq.com/getting-started-for-hiring-managers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
        >
          Full Ashby Hiring Manager Guide →
        </a>
      </section>
    </div>
  );
}
