import { Card, CardContent } from "@/components/ui/card";
import { marketplaceSides, haiTeams } from "@/data/training-content";

export function ChapterHowRecruitingWorks() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-sky/10 text-fun-sky mb-3">
          Chapter 1
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          How Recruiting Works at Handshake
        </h1>
        <p className="mt-2 text-muted-foreground">
          Our recruiting philosophy, team structure, the business you're hiring for, and how we operate across <strong className="text-foreground">Careers</strong> and <strong className="text-foreground">Handshake AI</strong>.
        </p>
      </div>

      {/* Philosophy */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Our Philosophy</h2>
        <div className="rounded-xl bg-gradient-to-r from-fun-sky/8 to-fun-violet/8 border border-fun-sky/15 p-5">
          <p className="text-foreground leading-relaxed">
            Handshake recruiting is built on three pillars: <strong className="text-fun-sky">clarity</strong>, <strong className="text-fun-emerald">speed</strong>, and <strong className="text-fun-violet">evidence</strong>. 
            Every process is designed to give hiring managers transparency into where their roles stand, move candidates through the pipeline efficiently, and make data-driven hiring decisions.
          </p>
        </div>
      </section>

      {/* The Recruiting Team */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">The Recruiting Team</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { role: "Senior Director, Talent", focus: "Strategy, process, hiring manager enablement", color: "border-t-4 border-t-fun-coral" },
            { role: "Senior Recruiting Manager", focus: "Engineering & Product", color: "border-t-4 border-t-fun-sky" },
            { role: "Senior Recruiting Manager", focus: "Business, Operations & GTM", color: "border-t-4 border-t-fun-violet" },
          ].map((person, i) => (
            <Card key={i} className={`${person.color} border-border/60`}>
              <CardContent className="pt-5">
                <p className="font-bold text-foreground">{person.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{person.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The full team includes senior recruiters, technical sourcers, and recruiting operations specialists across both business units.
        </p>
      </section>

      {/* The Handshake Platform */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">The Handshake Platform</h2>
          <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-fun-emerald/10 text-fun-emerald">Careers</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Handshake is the career network for the AI economy — a <strong className="text-foreground">three-sided marketplace</strong> connecting students, educators, and employers in one trusted platform.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {marketplaceSides.map((s) => (
            <Card key={s.side} className={`${s.color} border-border/60`}>
              <CardContent className="pt-5">
                <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-2 ${s.badge}`}>
                  {s.side}
                </span>
                <p className="text-2xl font-extrabold text-foreground">{s.stat}</p>
                <p className="text-xs text-muted-foreground mb-2">{s.statLabel}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl bg-fun-emerald/5 border border-fun-emerald/15 p-4">
          <p className="text-sm text-foreground leading-relaxed">
            <strong className="text-fun-emerald">The flywheel:</strong> More students attract more employers, which brings more schools, which creates a larger student network. Handshake tripled ARR at scale in recent years, backed by $434M+ in funding from Kleiner Perkins, Spark Capital, Coatue, Lightspeed, and the Chan Zuckerberg Initiative.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Employer Revenue (GTM)</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sales, account management, SDRs, and solutions teams that sell Handshake Premium to employers and drive revenue growth.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Education Success</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Relationship managers, product specialists, and customer success teams partnering with universities to drive student outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Handshake AI */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Handshake AI</h2>
          <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-fun-indigo/10 text-fun-indigo">HAI</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Handshake AI is our <strong className="text-foreground">human knowledge business</strong>, leveraging the largest early-career network to connect verified domain experts with the world's leading AI research labs.
        </p>
        <div className="rounded-xl bg-gradient-to-r from-fun-indigo/8 to-fun-violet/8 border border-fun-indigo/15 p-5">
          <p className="text-foreground leading-relaxed">
            <strong className="text-fun-indigo">What it does:</strong> Connects PhDs, researchers, and domain specialists to frontier AI labs for data annotation, model evaluation, and post-training work. Each lab spends ~$1B/year on human data — Handshake AI's trusted network of verified experts is a competitive moat.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {haiTeams.map((t) => (
            <Card key={t.team} className={`${t.color} border-border/60`}>
              <CardContent className="pt-5">
                <h3 className="font-bold text-foreground">{t.team}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl bg-fun-indigo/5 border border-fun-indigo/15 p-4">
          <p className="text-sm text-foreground leading-relaxed">
            <strong className="text-fun-indigo">One Handshake:</strong> Network + Recruiting Platform + Data Annotation. The network creates recruiting matches, recruiting generates career data, and that data powers AI systems. Leadership drawn from Scale AI, Meta, xAI, Notion, Coinbase, and Palantir.
          </p>
        </div>
      </section>

      {/* Careers vs. HAI Recruiting */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Careers vs. HAI Recruiting</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-t-4 border-t-fun-emerald border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Careers Recruiting</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Standard hiring across all departments. Full-cycle recruiting with structured interviews, scorecards in Ashby, and collaborative debriefs.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-fun-indigo border-border/60">
            <CardContent className="pt-5">
              <h3 className="font-bold text-foreground">Handshake AI Recruiting</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Specialized hiring for AI/ML roles and operations teams. Often requires tailored assessments via CodeSignal, deeper technical screens, and close partnership with the HAI team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Standard Recruiting Flow */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">The Standard Recruiting Flow</h2>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {[
            { step: "Intake", color: "bg-fun-sky/10 text-fun-sky border border-fun-sky/20" },
            { step: "Ashby Setup", color: "bg-fun-violet/10 text-fun-violet border border-fun-violet/20" },
            { step: "Hiring Huddle", color: "bg-fun-emerald/10 text-fun-emerald border border-fun-emerald/20" },
            { step: "Sourcing", color: "bg-fun-amber/10 text-fun-amber border border-fun-amber/20" },
            { step: "Screening", color: "bg-fun-coral/10 text-fun-coral border border-fun-coral/20" },
            { step: "Interviews", color: "bg-fun-indigo/10 text-fun-indigo border border-fun-indigo/20" },
            { step: "Debrief", color: "bg-fun-rose/10 text-fun-rose border border-fun-rose/20" },
            { step: "Offer", color: "bg-fun-teal/10 text-fun-teal border border-fun-teal/20" },
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1.5 font-bold text-xs ${item.color}`}>
                {item.step}
              </span>
              {i < 7 && <span className="text-muted-foreground/40">→</span>}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Each role follows this pipeline. Your recruiter will guide you through every stage — you'll be most involved at Intake, Interviews, and Debrief.
        </p>
      </section>
    </div>
  );
}
