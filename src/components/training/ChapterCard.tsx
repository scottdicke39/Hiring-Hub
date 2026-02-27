import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ChapterCardProps {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  coral: { bg: "bg-fun-coral/10", icon: "text-fun-coral", border: "hover:border-fun-coral/40", badge: "bg-fun-coral/15 text-fun-coral" },
  sky: { bg: "bg-fun-sky/10", icon: "text-fun-sky", border: "hover:border-fun-sky/40", badge: "bg-fun-sky/15 text-fun-sky" },
  violet: { bg: "bg-fun-violet/10", icon: "text-fun-violet", border: "hover:border-fun-violet/40", badge: "bg-fun-violet/15 text-fun-violet" },
  amber: { bg: "bg-fun-amber/10", icon: "text-fun-amber", border: "hover:border-fun-amber/40", badge: "bg-fun-amber/15 text-fun-amber" },
  emerald: { bg: "bg-fun-emerald/10", icon: "text-fun-emerald", border: "hover:border-fun-emerald/40", badge: "bg-fun-emerald/15 text-fun-emerald" },
  rose: { bg: "bg-fun-rose/10", icon: "text-fun-rose", border: "hover:border-fun-rose/40", badge: "bg-fun-rose/15 text-fun-rose" },
  indigo: { bg: "bg-fun-indigo/10", icon: "text-fun-indigo", border: "hover:border-fun-indigo/40", badge: "bg-fun-indigo/15 text-fun-indigo" },
  teal: { bg: "bg-fun-teal/10", icon: "text-fun-teal", border: "hover:border-fun-teal/40", badge: "bg-fun-teal/15 text-fun-teal" },
};

export function ChapterCard({ index, title, description, icon: Icon, color, onClick }: ChapterCardProps) {
  const c = colorMap[color] || colorMap.emerald;

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 fun-card-glow group border-border/60 ${c.border}`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.bg} ${c.icon} shadow-sm`}>
            <Icon className="h-5.5 w-5.5" strokeWidth={2.2} />
          </div>
          <div>
            <span className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] px-2 py-0.5 rounded-full mb-2 ${c.badge}`}>
              Chapter {index}
            </span>
            <CardTitle className="text-base group-hover:text-foreground transition-colors leading-snug">
              {title}
            </CardTitle>
            <CardDescription className="mt-1.5 text-muted-foreground/80 text-[13px] leading-relaxed">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
