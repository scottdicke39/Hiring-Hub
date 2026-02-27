import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, BarChart3, Users, PieChart, MessageSquare } from "lucide-react";
import { recruitingTools } from "@/data/training-content";

const dashboardTabs = [
  {
    icon: BarChart3,
    tab: "Summary",
    color: "text-fun-sky",
    bg: "bg-fun-sky/10",
    description: "Top-of-funnel metrics and overall pipeline health for your role.",
    metrics: [
      { name: "Total Candidates", desc: "Top-of-funnel count of job considerations, excluding unconverted leads" },
      { name: "Active Leads", desc: "Candidates currently in lead stages — high counts may indicate heavy sourcing or delays" },
      { name: "Active Candidates", desc: "All candidates in active interview or offer stages (excludes leads and app review)" },
      { name: "Candidate to Offer Ratio", desc: "E.g. \"52:1\" means ~52 candidates at top of funnel per offer extended" },
      { name: "Hires", desc: "Total candidates hired on this job" },
    ],
    charts: [
      "Overall Funnel — passthrough rates from stage to stage",
      "Interviews Week over Week — volume by interview stage",
      "New Candidates by Source Type — sourcing channel trends",
      "Pipeline History — how many candidates were in each stage over time",
      "Time in Process — median days per stage to spot bottlenecks",
    ],
  },
  {
    icon: Users,
    tab: "Interviews & Feedback",
    color: "text-fun-violet",
    bg: "bg-fun-violet/10",
    description: "Interview volume, interviewer workload, and scorecard calibration data.",
    metrics: [
      { name: "Upcoming Interviews", desc: "Scheduled interviews in the next 14 days, grouped by stage" },
      { name: "Interviews per Hire", desc: "Total interviews conducted divided by hires made" },
      { name: "Interview Load by Interviewer", desc: "Hours spent interviewing per team member" },
      { name: "Interview Load by Stage", desc: "Hours per interview stage (e.g. Recruiter Screen, Onsite)" },
    ],
    charts: [
      "Feedback Completion by Interviewer — % of scorecards submitted and avg time to submit",
      "Feedback Calibration by Interviewer — score distribution to detect bias",
      "Feedback Calibration by Interview — score patterns per interview type",
    ],
  },
  {
    icon: PieChart,
    tab: "Source Details",
    color: "text-fun-coral",
    bg: "bg-fun-coral/10",
    description: "Deep dive into where your candidates come from and which channels produce the best results.",
    metrics: [
      { name: "Total Leads & Converted", desc: "Sourced leads count and how many entered the interview pipeline" },
      { name: "Referrals & Active Referrals", desc: "All referral submissions and currently-in-process referral candidates" },
      { name: "Referred By", desc: "Which teammates referred the most candidates, grouped by outcome" },
    ],
    charts: [
      "Passthrough Rate by Source Type — which channels produce candidates that advance",
      "Source Type of Candidates — pie chart of top-of-funnel composition",
      "Qualified Candidates by Source Type — candidates who pass application review",
      "Passthrough Rate by Source Details — granular breakdown (LinkedIn, Referral, Indeed, etc.)",
    ],
  },
];

const notificationCategories = [
  {
    role: "All Users",
    items: ["Mentioned in note", "Reply to note", "[Tech Only] Assessment finished"],
  },
  {
    role: "Hiring Managers",
    items: ["Feedback submitted", "Mentioned in interview feedback", "Candidate review requested", "Hired", "Survey requested", "Overdue survey"],
  },
  {
    role: "Offer Approvers",
    items: ["Offer approval reached next stage", "Offer approval completed"],
  },
];

export function ChapterTechStack() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-indigo/10 text-fun-indigo mb-3">
          Chapter 5
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Our Tech Stack
        </h1>
        <p className="mt-2 text-muted-foreground">
          The tools we use and when you'll interact with them.
        </p>
      </div>

      <div className="space-y-4">
        {recruitingTools.map((tool) => (
          <Card key={tool.name} className="overflow-hidden border-border/60">
            <CardContent className="pt-5">
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-lg">{tool.name}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${tool.color}`}>
                    {tool.category}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{tool.description}</p>
                <div className="mt-3 rounded-xl bg-gradient-to-r from-secondary to-accent/50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-1">
                    When You'll Use It
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{tool.youllUseItFor}</p>
                </div>

                {tool.tips && (
                  <div className="mt-3 rounded-xl border-2 border-dashed border-border p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
                      💡 Quick Tips
                    </p>
                    <ul className="space-y-1.5">
                      {tool.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-amber" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tool.learnMore && (
                  <a
                    href={tool.learnMore.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                  >
                    {tool.learnMore.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hiring Huddle */}
      <div className="rounded-xl bg-gradient-to-r from-fun-teal/8 to-fun-emerald/8 border border-fun-teal/15 p-5 space-y-2">
        <h3 className="font-bold text-foreground">The Hiring Huddle</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Before interviews kick off, the recruiter and hiring manager hold a <strong className="text-foreground">Hiring Huddle</strong> — a quick alignment meeting to finalize the interview panel, confirm which values and competencies each interviewer will assess, and review sourcing strategy. This ensures every interviewer knows their lane and the process starts strong.
        </p>
      </div>

      {/* Ashby Job Dashboard Deep Dive */}
      <div className="border-t-2 border-dashed pt-8 space-y-6">
        <div>
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-sky/10 text-fun-sky mb-3">
            Deep Dive
          </span>
          <h2 className="text-xl font-extrabold">Ashby Job Dashboard</h2>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            Every job in Ashby has a built-in dashboard under <strong className="text-foreground">Activity → Dashboard</strong>. Real-time data on pipeline health, interview activity, and sourcing channels — no custom reports needed.
          </p>
          <a
            href="https://www.loom.com/share/0795340e715e487aa07011f97ff94e15"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2.5 rounded-xl bg-handshake-nori px-5 py-3 text-sm font-bold text-white transition-all hover:bg-handshake-nori/90 hover:shadow-lg"
          >
            <Play className="h-4 w-4 text-handshake-lime" />
            Watch the walkthrough (Loom)
          </a>
        </div>

        <div className="space-y-4">
          {dashboardTabs.map((section) => (
            <Card key={section.tab} className="overflow-hidden border-border/60">
              <CardContent className="pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${section.bg}`}>
                    <section.icon className={`h-5 w-5 ${section.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{section.tab}</h3>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-secondary to-accent/50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-2">
                    Key Metrics
                  </p>
                  <div className="space-y-2">
                    {section.metrics.map((m) => (
                      <div key={m.name} className="flex items-start gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${section.color === "text-fun-sky" ? "bg-fun-sky" : section.color === "text-fun-violet" ? "bg-fun-violet" : "bg-fun-coral"}`} />
                        <div>
                          <span className="font-bold text-foreground text-sm">{m.name}</span>
                          <span className="text-muted-foreground text-sm"> — {m.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border-2 border-dashed border-border p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
                    📊 Charts & Reports
                  </p>
                  <ul className="space-y-1.5">
                    {section.charts.map((chart) => (
                      <li key={chart} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
                        {chart}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-fun-amber/8 border border-fun-amber/20 p-4">
          <p className="text-sm text-foreground">
            <strong>💡 Pro tip:</strong> Click <strong>Go to Report</strong> on any chart to see the underlying report's Subjects, Filters, and Group By selections — and customize it for your needs.
          </p>
        </div>

        <a
          href="https://docs.ashbyhq.com/job-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
        >
          Full Ashby Job Dashboard documentation
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Notification Setup */}
      <div className="border-t-2 border-dashed pt-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fun-rose/10">
            <MessageSquare className="h-5 w-5 text-fun-rose" />
          </div>
          <h2 className="text-xl font-extrabold">Setting Up Ashby Notifications</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          By default, only essential email notifications are enabled. Navigate to <strong className="text-foreground">Personal Settings → Notifications</strong> (click your name in the upper right) to enable Slack and/or email alerts.
        </p>
        <div className="space-y-3">
          {notificationCategories.map((cat) => (
            <div key={cat.role} className="rounded-xl border p-4">
              <p className="font-bold text-foreground text-sm mb-2">{cat.role}</p>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
