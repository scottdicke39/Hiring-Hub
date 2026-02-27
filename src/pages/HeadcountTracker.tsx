import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, MapPin, Calendar, Briefcase } from "lucide-react";
import { useState } from "react";
import {
  mockHeadcount,
  PIPELINE_STAGES,
  stageColors,
  type HeadcountStatus,
  type HeadcountRequest,
} from "@/data/mock-headcount";

type FilterTab = "All" | "Active" | "Completed" | "Canceled";

function getStageIndex(status: HeadcountStatus): number {
  return PIPELINE_STAGES.indexOf(status);
}

function filterRequests(tab: FilterTab, data: HeadcountRequest[]): HeadcountRequest[] {
  switch (tab) {
    case "Active":
      return data.filter((r) => !["Hired", "Canceled"].includes(r.status));
    case "Completed":
      return data.filter((r) => r.status === "Hired");
    case "Canceled":
      return data.filter((r) => r.status === "Canceled");
    default:
      return data;
  }
}

function PipelineStepper({ status }: { status: HeadcountStatus }) {
  const activeIdx = getStageIndex(status);
  const isCanceled = status === "Canceled";

  return (
    <div className="flex items-center gap-1">
      {PIPELINE_STAGES.map((stage, i) => {
        const isComplete = !isCanceled && i <= activeIdx;
        const colors = stageColors[stage];
        return (
          <div key={stage} className="flex items-center gap-1">
            <div
              className={`h-2 w-8 rounded-full transition-colors ${
                isComplete ? colors.dot : "bg-border"
              }`}
              title={stage}
            />
          </div>
        );
      })}
    </div>
  );
}

function StatusBadge({ status }: { status: HeadcountStatus }) {
  const colors = stageColors[status];
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${colors.bg} ${colors.text}`}>
      {status}
    </span>
  );
}

export default function HeadcountTracker() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const filtered = filterRequests(activeTab, mockHeadcount);

  const tabs: FilterTab[] = ["All", "Active", "Completed", "Canceled"];

  const stageCounts = PIPELINE_STAGES.map((stage) => ({
    stage,
    count: mockHeadcount.filter((r) => r.status === stage).length,
    colors: stageColors[stage],
  }));

  return (
    <AppLayout>
      <div className="container py-8 space-y-6">
        {/* Demo Banner */}
        <div className="rounded-xl bg-fun-amber/8 border border-fun-amber/20 p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-fun-amber shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-foreground">Demo Data</p>
            <p className="text-sm text-muted-foreground">
              This is a preview of what your headcount tracker will look like. Live integration with Linear and Ashby is coming soon.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">My Headcount Tracker</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Track your open roles from request to hire.
            </p>
          </div>
          <Button size="lg" disabled variant="outline">
            Sign in with Google (Coming Soon)
          </Button>
        </div>

        {/* Pipeline Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stageCounts.map((s) => (
            <Card key={s.stage} className="border-border/60">
              <CardContent className="pt-4 pb-4 text-center">
                <p className="text-2xl font-extrabold text-foreground">{s.count}</p>
                <p className={`text-xs font-bold ${s.colors.text}`}>{s.stage}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 border-b pb-0">
          {tabs.map((tab) => {
            const count =
              tab === "All"
                ? mockHeadcount.length
                : filterRequests(tab, mockHeadcount).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab
                    ? "bg-secondary text-foreground border-b-2 border-b-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {tab}
                <span className="ml-1.5 text-xs text-muted-foreground">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Role Cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-sm">
              No requests in this category.
            </div>
          ) : (
            filtered.map((req) => (
              <Card key={req.id} className="border-border/60 transition-all hover:shadow-sm">
                <CardContent className="pt-5 pb-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-foreground">{req.title}</h3>
                        <StatusBadge status={req.status} />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" />
                          {req.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {req.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {req.dateSubmitted}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Level: <strong className="text-foreground">{req.level}</strong></span>
                        <span>FIN: <strong className="text-foreground">{req.finId}</strong></span>
                        <span>Recruiter: <strong className="text-foreground">{req.recruiter}</strong></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <PipelineStepper status={req.status} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {req.id}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
}
