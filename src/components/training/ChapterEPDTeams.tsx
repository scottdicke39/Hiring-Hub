import { Card, CardContent } from "@/components/ui/card";
import { epdBusinessUnits } from "@/data/training-content";

export function ChapterEPDTeams() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-teal/10 text-fun-teal mb-3">
          Chapter 7
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          EPD Teams & Squads
        </h1>
        <p className="mt-2 text-muted-foreground">
          Engineering, Product & Design organization — effective January 2026. For feature-level ownership, visit <strong className="text-foreground">go/ownership</strong>.
        </p>
      </div>

      {epdBusinessUnits.map((bu) => (
        <section key={bu.name} className="space-y-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${bu.badge}`}>
              {bu.name}
            </span>
          </h2>

          {bu.teams.map((team) => (
            <Card key={team.name} className={`${bu.accent} border-border/60`}>
              <CardContent className="pt-5">
                <h3 className="font-bold text-foreground text-base">{team.name}</h3>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  {[
                    { label: "Product", value: team.product },
                    { label: "Design", value: team.design },
                    { label: "Eng", value: team.eng },
                  ].map((col) => (
                    <div key={col.label}>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">{col.label}</p>
                      <p className="text-foreground font-medium">{col.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {team.squads.map((squad) => (
                    <span
                      key={squad}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${bu.squadColor}`}
                    >
                      {squad}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      ))}
    </div>
  );
}
