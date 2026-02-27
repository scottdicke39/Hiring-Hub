import { AppLayout } from "@/components/AppLayout";
import { ChapterCard } from "@/components/training/ChapterCard";
import { ChapterHowRecruitingWorks } from "@/components/training/ChapterHowRecruitingWorks";
import { ChapterHeadcountRequest } from "@/components/training/ChapterHeadcountRequest";
import { ChapterIntakeMeeting } from "@/components/training/ChapterIntakeMeeting";
import { ChapterReferrals } from "@/components/training/ChapterReferrals";
import { ChapterTechStack } from "@/components/training/ChapterTechStack";
import { ChapterHiringManagerRole } from "@/components/training/ChapterHiringManagerRole";
import { ChapterEPDTeams } from "@/components/training/ChapterEPDTeams";
import { ChapterResources } from "@/components/training/ChapterResources";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { chapters } from "@/data/training-content";

const chapterComponents: Record<string, React.FC> = {
  "how-recruiting-works": ChapterHowRecruitingWorks,
  "headcount-request": ChapterHeadcountRequest,
  "intake-meeting": ChapterIntakeMeeting,
  "referrals": ChapterReferrals,
  "tech-stack": ChapterTechStack,
  "hiring-manager-role": ChapterHiringManagerRole,
  "epd-teams": ChapterEPDTeams,
  "resources": ChapterResources,
};

export default function TrainingGuide() {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const ActiveComponent = activeChapter ? chapterComponents[activeChapter] : null;

  return (
    <AppLayout>
      {!activeChapter ? (
        <>
          {/* Hero section */}
          <div className="fun-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] fun-dot-pattern" />
            <div className="container relative py-14 sm:py-20">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-handshake-lime/15 px-4 py-1.5 mb-5">
                  <Sparkles className="h-3.5 w-3.5 text-handshake-lime" />
                  <span className="text-xs font-bold text-handshake-lime tracking-wide uppercase">
                    Hiring Manager Training
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Your Guide to Recruiting<br />
                  <span className="text-handshake-lime">at Handshake</span>
                </h1>
                <p className="mt-4 text-base text-white/70 leading-relaxed max-w-lg">
                  Everything you need to hire great people — from opening a role to extending an offer. Pick a chapter to get started.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter grid */}
          <div className="container py-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((ch, i) => (
                <ChapterCard
                  key={ch.id}
                  index={i + 1}
                  title={ch.title}
                  description={ch.description}
                  icon={ch.icon}
                  color={ch.color}
                  onClick={() => setActiveChapter(ch.id)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="container py-10">
          <button
            onClick={() => setActiveChapter(null)}
            className="mb-6 flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all chapters
          </button>
          {ActiveComponent && <ActiveComponent />}
        </div>
      )}
    </AppLayout>
  );
}
