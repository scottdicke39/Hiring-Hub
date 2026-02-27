import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, AlertTriangle, FileText } from "lucide-react";

const healthCards = [
  {
    label: "Chapters Up to Date",
    value: "6 / 8",
    icon: CheckCircle,
    color: "text-fun-emerald",
    bg: "bg-fun-emerald/10",
  },
  {
    label: "Needs Review",
    value: "2",
    icon: AlertTriangle,
    color: "text-fun-amber",
    bg: "bg-fun-amber/10",
  },
  {
    label: "Last Updated",
    value: "Feb 2026",
    icon: Clock,
    color: "text-fun-sky",
    bg: "bg-fun-sky/10",
  },
  {
    label: "Total Sections",
    value: "32",
    icon: FileText,
    color: "text-fun-violet",
    bg: "bg-fun-violet/10",
  },
];

const contentItems = [
  { chapter: "Ch 1: How Recruiting Works", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 2: Headcount Request", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 3: Intake Meeting", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 4: Referrals", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 5: Tech Stack", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 6: HM Role", status: "Current", lastReview: "Feb 2026", statusColor: "text-fun-emerald" },
  { chapter: "Ch 7: EPD Teams", status: "Needs Review", lastReview: "Jan 2026", statusColor: "text-fun-amber" },
  { chapter: "Ch 8: Resources & Links", status: "Needs Review", lastReview: "Jan 2026", statusColor: "text-fun-amber" },
];

export default function AdminDashboard() {
  return (
    <AppLayout>
      <div className="container py-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
            <Shield className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Content Health Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Track content freshness, review status, and documentation completeness.
            </p>
          </div>
        </div>

        {/* Health Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {healthCards.map((card) => (
            <Card key={card.label} className="border-border/60">
              <CardContent className="pt-5 flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${card.bg}`}>
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-foreground">{card.value}</p>
                  <p className="text-xs text-muted-foreground">{card.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Registry */}
        <Card className="border-border/60">
          <CardContent className="pt-5">
            <h2 className="font-bold text-foreground mb-4">Content Registry</h2>
            <div className="space-y-2">
              {contentItems.map((item) => (
                <div key={item.chapter} className="flex items-center justify-between rounded-lg border p-3">
                  <span className="text-sm font-medium text-foreground">{item.chapter}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{item.lastReview}</span>
                    <span className={`font-bold ${item.statusColor}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <Card className="border-border/60">
          <CardContent className="pt-5 text-sm text-muted-foreground space-y-2">
            <h2 className="font-bold text-foreground mb-2">Coming Soon</h2>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-sky" />
                Automatic staleness alerts for chapters not reviewed in 90+ days
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-violet" />
                Notion sync status — track which Notion pages feed each chapter
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-emerald" />
                Confluence retirement checklist — track migration progress
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fun-amber" />
                Content consistency checks across chapters
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
