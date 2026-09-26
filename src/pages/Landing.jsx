import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Search, Target, RefreshCw, TrendingUp } from "lucide-react";
import { buildDemoState } from "../utils/demo";
import { loadState } from "../utils/storage";

const steps = [
  { label: "Assess", icon: Search },
  { label: "Identify Gap", icon: Target },
  { label: "Take Action", icon: CheckCircle2 },
  { label: "Reassess", icon: RefreshCw },
  { label: "Improve", icon: TrendingUp },
];

const benefits = [
  "Know your current level",
  "Discover your weakest skills",
  "Get a personalized preparation plan",
];

export default function Landing() {
  const navigate = useNavigate();

  function startDemo() {
    buildDemoState();
    navigate("/results");
  }

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Placement readiness</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">PlacementCoach</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Know where you stand. Know what to improve. Know what to do next.
        </p>
        <p className="mt-5 max-w-2xl text-slate-600">
          Students often prepare for placements without knowing whether they are focusing on the right skills.
          PlacementCoach assesses your current skills, identifies your specific gaps and creates your next
          preparation action.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate(loadState().profile ? "/assessment" : "/profile")}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
          >
            Start Assessment
          </button>
          <button
            type="button"
            onClick={startDemo}
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Demo Student
          </button>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Step {index + 1}</p>
                <p className="font-medium text-slate-800">{step.label}</p>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight className="ml-auto hidden h-4 w-4 text-slate-300 md:block" />
              ) : null}
            </div>
          );
        })}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefits.map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-indigo-600" />
            <p className="mt-3 font-medium text-slate-800">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
