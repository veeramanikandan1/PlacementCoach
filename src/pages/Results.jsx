import { Link } from "react-router-dom";
import ScoreRing from "../components/ScoreRing";
import CategoryScoreRow from "../components/CategoryScoreRow";
import EmptyState from "../components/EmptyState";
import StatusBadge from "../components/StatusBadge";
import { loadState } from "../utils/storage";
import { scoreLabel } from "../utils/scoring";

export default function Results() {
  const { scores, profile } = loadState();

  if (!scores) {
    return (
      <EmptyState
        title="No results yet"
        message="Complete the diagnostic assessment to see placement readiness and your biggest gap."
        actionLabel="Start assessment"
        to="/assessment"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">{profile?.name ? `${profile.name} · ${profile.targetRole}` : "Student"}</p>
        <h1 className="text-2xl font-bold text-slate-900">Your Placement Readiness</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[200px_1fr] md:items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex justify-center">
          <ScoreRing score={scores.overall} />
        </div>
        <div>
          <p className="text-slate-600">
            This score is based only on the diagnostic you completed. It is a readiness snapshot, not a hiring decision.
          </p>
          <div className="mt-3">
            <StatusBadge label={scores.overallLabel} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <CategoryScoreRow name="DSA" score={scores.dsa} label={scores.categoryLabels.DSA} />
        <CategoryScoreRow name="Python" score={scores.python} label={scores.categoryLabels.Python} />
        <CategoryScoreRow name="SQL" score={scores.sql} label={scores.categoryLabels.SQL} />
      </div>

      <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-6">
        <p className="text-sm font-medium text-indigo-700">Your Biggest Gap</p>
        <h2 className="mt-1 text-2xl font-bold text-indigo-950">{scores.primaryGap}</h2>
        <p className="mt-2 text-sm text-indigo-900">
          {scoreLabel(scores.primaryScore)} · {scores.primaryScore}%
        </p>
        <p className="mt-4 font-medium text-slate-900">Why?</p>
        <p className="mt-1 text-slate-700">Your performance in this topic was lower than your other assessed areas.</p>
        {scores.secondaryGap ? (
          <p className="mt-3 text-sm text-slate-600">
            Secondary gap: {scores.secondaryGap} ({scores.secondaryScore}%).
          </p>
        ) : null}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">Topic breakdown</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {scores.rankedTopics.map((row) => (
            <div key={row.topic} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
              <span>{row.topic}</span>
              <span className="font-medium">
                {row.score}% · {row.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/plan"
        className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
      >
        View My Personalized Plan
      </Link>
    </div>
  );
}
