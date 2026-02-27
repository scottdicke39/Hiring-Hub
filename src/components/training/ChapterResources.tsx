import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { resourceSections } from "@/data/training-content";

export function ChapterResources() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-fun-rose/10 text-fun-rose mb-3">
          Chapter 8
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          People OS — Resources & Links
        </h1>
        <p className="mt-2 text-muted-foreground">
          Quick links to all recruiting, interviewing, and people resources on Notion and vendor docs.
        </p>
      </div>

      {resourceSections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className={`text-xl font-bold ${section.color}`}>{section.title}</h2>
          <div className="space-y-2">
            {section.items.map((item) => (
              <Card key={item.label} className="border-border/60 transition-all hover:shadow-sm">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${section.dot}`} />
                      <div>
                        <p className="font-bold text-foreground text-sm">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 shrink-0 text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
