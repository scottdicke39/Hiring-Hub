import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { handshakeValues, speedTargets } from "@/data/training-content";

export function ChapterIntakeMeeting() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-emerald/10 text-fun-emerald mb-3">
          Chapter 3
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          The Intake Meeting
        </h1>
        <p className="mt-2 text-muted-foreground">
          The most important meeting in the hiring process — where we align on what great looks like.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Before the Meeting</h2>
        <div className="space-y-3">
          {[
            { title: "Complete the Interview Planning Form", detail: "Fill out the Google Form to outline your priorities for Recruiting before the intake. This gives your recruiter a jumpstart in launching the role. Only visible to the Recruiting team.", color: "border-l-4 border-l-fun-sky" },
            { title: "Identify Competencies & Principles", detail: "Select 3–4 Handshake Principles (from \"how we act\" and \"how we lead\") and 3–4 key skill sets — both hard skills (e.g. SQL, Ruby on Rails) and soft skills (e.g. communication, problem-solving).", color: "border-l-4 border-l-fun-violet" },
            { title: "BrightHire Recording", detail: "The intake meeting is recorded via BrightHire. Your recruiter will use this to build the interview plan and create structured interview guides.", color: "border-l-4 border-l-fun-emerald" },
          ].map((item) => (
            <Card key={item.title} className={`${item.color} border-border/60`}>
              <CardContent className="pt-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Meeting Agenda</h2>
        <div className="space-y-2">
          {[
            { topic: "Business Context", detail: "Why is this role open? What problem does it solve?", color: "bg-fun-sky" },
            { topic: "Success Milestones", detail: "What should this person achieve at 30, 60, 90 days?", color: "bg-fun-amber" },
            { topic: "Ideal Candidate Profile (ICP)", detail: "Skills, experience, culture-add signals, and deal-breakers", color: "bg-fun-emerald" },
            { topic: "Interview Design", detail: "How many rounds? Which competencies per round? Who interviews?", color: "bg-fun-violet" },
          ].map((item) => (
            <div key={item.topic} className="rounded-xl border p-4 flex items-start gap-3">
              <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
              <div>
                <p className="font-bold text-foreground">{item.topic}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Standard Interview Process</h2>
        <div className="rounded-xl bg-gradient-to-r from-fun-emerald/8 to-fun-sky/8 border border-fun-emerald/15 p-4 mb-3">
          <p className="text-sm text-foreground leading-relaxed">
            Total interview time should not exceed <strong className="text-fun-emerald">3 hours</strong> across no more than <strong className="text-fun-emerald">5 interviews</strong>.
          </p>
        </div>
        <div className="space-y-2">
          {[
            { stage: "1. Recruiter Screen", detail: "Initial culture and qualifications assessment", color: "bg-fun-sky" },
            { stage: "2. Hiring Manager Screen", detail: "Deeper dive into experience, role fit, and team alignment", color: "bg-fun-violet" },
            { stage: "3. Skills Test / Portfolio Review (optional)", detail: "CodeSignal assessment for technical roles, portfolio review for design roles", color: "bg-fun-amber" },
            { stage: "4. Onsite Interviews", detail: "1:1s, presentations, HM deep dives — all tied to selected HS Principles and skillsets", color: "bg-fun-coral" },
            { stage: "5. Executive Screen", detail: "Not required for L3–L4 roles. Senior leadership alignment", color: "bg-fun-indigo" },
          ].map((item) => (
            <div key={item.stage} className="rounded-xl border p-3 flex items-start gap-3">
              <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
              <div>
                <p className="font-bold text-foreground text-sm">{item.stage}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Presentation & Assessment Guidelines</h2>
        <div className="space-y-3">
          {[
            { title: "Pre-Interview Work", detail: "Assign no more than 1–2 hours of candidate prep time. Evaluate both quality and efficiency — think \"my exec asked for this by EOD at 1 PM.\"", color: "border-l-4 border-l-fun-amber" },
            { title: "Set Clear Expectations", detail: "Explain the \"why\" to candidates, what \"good\" looks like, and define format/time expectations. The failure mode is when candidates are guessing what you're looking for.", color: "border-l-4 border-l-fun-coral" },
            { title: "Simple Rubric", detail: "Evaluate on: Craft (functional depth), Thinking (structured/analytical), Communication (clarity + audience awareness), and Execution Judgment (prioritization + impact).", color: "border-l-4 border-l-fun-indigo" },
          ].map((item) => (
            <Card key={item.title} className={`${item.color} border-border/60`}>
              <CardContent className="pt-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">The Debrief</h2>
        <div className="rounded-xl border-2 border-dashed border-border p-5 space-y-3 text-sm text-muted-foreground">
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-coral/10 text-fun-coral text-xs font-bold mr-1">Timing</span> Held within 24 hours after final interview. All scorecards must be submitted before.</p>
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-sky/10 text-fun-sky text-xs font-bold mr-1">Structure</span> Start with strengths — what would this person bring? Discuss concerns after. Focus on patterns, not isolated opinions.</p>
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-emerald/10 text-fun-emerald text-xs font-bold mr-1">Decision</span> Hiring Manager has final decision authority. A single "No" does not automatically disqualify a candidate.</p>
          <p><span className="inline-block px-2 py-0.5 rounded-full bg-fun-violet/10 text-fun-violet text-xs font-bold mr-1">Wrap-up</span> Confirm decision and rationale. Reflect on process improvements for future hires.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">After the Intake</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="border-t-4 border-t-fun-sky border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Ashby Interview Plan</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Structured interview stages with assigned interviewers, scorecards, and focus areas per round.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-fun-emerald border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Sourcing Strategy</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Target companies, outreach messaging, and timeline for the search.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Handshake Values for Interviews */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Interview Values</h2>
        <p className="text-sm text-muted-foreground">
          Select 3–4 of these core Handshake values per role. Interviewers assess candidates on these using a 1–4 behavioral rubric.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {handshakeValues.map((v) => (
            <Card key={v.value} className={`${v.color} border-border/60`}>
              <CardContent className="pt-4 pb-4">
                <h3 className="font-bold text-foreground">{v.value}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{v.anchor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Speed-to-Market Targets */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Speed-to-Market Targets</h2>
        <div className="rounded-xl bg-gradient-to-r from-fun-coral/8 to-fun-amber/8 border border-fun-coral/15 p-5">
          <p className="text-sm text-foreground leading-relaxed mb-3">
            We aim to move from <strong className="text-fun-coral">application to offer in 14–21 days</strong>. Every delay risks losing great candidates.
          </p>
          <div className="space-y-2">
            {speedTargets.map((t) => (
              <div key={t.stage} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${t.color}`} />
                  <span className="text-muted-foreground">{t.stage}</span>
                </div>
                <span className="font-bold text-foreground">{t.target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <a
        href="https://www.notion.so/handshake/2b3a2996f6d681c3b496c42d8512a702"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
      >
        Full Handshake Interview Guidelines
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
