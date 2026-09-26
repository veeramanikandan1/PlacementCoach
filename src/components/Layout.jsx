import { NavLink, Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/assessment", label: "Assessment" },
  { to: "/results", label: "Results" },
  { to: "/plan", label: "Action Plan" },
  { to: "/progress", label: "Progress" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-semibold text-indigo-700">
            <GraduationCap className="h-5 w-5" />
            PlacementCoach
          </NavLink>
          <nav className="flex flex-wrap gap-1 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 ${
                    isActive
                      ? "bg-indigo-50 font-medium text-indigo-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
