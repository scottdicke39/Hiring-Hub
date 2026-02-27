import { NavLink } from "react-router-dom";
import { BookOpen, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Training Guide", icon: BookOpen },
  { to: "/headcount", label: "My Headcount", icon: BarChart3 },
  { to: "/admin", label: "Admin", icon: Settings },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-handshake-nori backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Handshake
            </span>
            <span className="text-sm font-medium text-handshake-lime">
              Recruiting Hub
            </span>
          </div>

          <nav className="flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-handshake-lime/20 text-handshake-lime"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
