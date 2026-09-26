import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import CategoryScoreRow from "../components/CategoryScoreRow";
import ProgressBar from "../components/ProgressBar";
import { loadState, resetState } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const state = loadState();
  const { profile, scores, history, reassessment, actionPlan } = state;

  if (!profile && !scores) {
    return (
      <EmptyState
        title="No progress yet"
        message="Add a profile and complete an assessment to track readiness over time."
        actionLabel="Get started"
        to="/profile"
      />
    );
  }

  const initial = history?.initialOverall;
  const latest = history?.latestOverall ?? scores?.overall;
  const overallDelta =
    initial != null && latest != null ? latest - initial : history?.lastImprovement;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Progress dashboard</h1>
          <p className="text-slate-600">
            {profile?.name || "Student"} · {profile?.targetRole || "No target role yet"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            resetState();
            navigate("/");
          }}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600"
        >
          Reset local data
        </button>
      </div>

      {!scores ? (
        <EmptyState
          title="Assessment not completed"
          message="Your profile is saved. Take the diagnostic to fill this dashboard."
          actionLabel="Start assessment"
          to="/assessment"
        />
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Latest overall" value={`${scores.overall}%`} />
            <Stat label="Assessments completed" value={history.assessmentsCompleted} />
            <Stat label="Current weakest topic" value={scores.primaryGap} />
            <Stat
              label="Improvement after reassessment"
              value={
                history.lastImprovement == null
                  ? "Not yet reassessed"
                  : `${history.lastImprovement >= 0 ? "+" : ""}${history.lastImprovement} pts`
              }
            />
          </div>

          <div className="space-y-3">
            <CategoryScoreRow name="DSA" score={scores.dsa} label={scores.categoryLabels.DSA} />
            <CategoryScoreRow name="Python" score={scores.python} label={scores.categoryLabels.Python} />
            <CategoryScoreRow name="SQL" score={scores.sql} label={scores.categoryLabels.SQL} />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Before vs After</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">Initial overall</p>
                <p className="text-2xl font-bold">{initial ?? scores.overall}%</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Latest overall</p>
                <p className="text-2xl font-bold text-indigo-700">{latest}%</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Improvement</p>
                <p className="text-2xl font-bold">
                  {overallDelta == null ? "—" : `${overallDelta >= 0 ? "+" : ""}${overallDelta} percentage points`}
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <ProgressBar value={initial ?? 0} label="Initial" />
              <ProgressBar value={latest ?? 0} label="Latest" />
            </div>
            {reassessment ? (
              <p className="mt-4 text-sm text-slate-600">
                Last topic check: {reassessment.topic} {reassessment.before}% → {reassessment.after}% (
                {reassessment.improvement >= 0 ? "+" : ""}
                {reassessment.improvement} pts).
              </p>
            ) : (
              <p className="mt-4 text-sm text-slate-500">Complete a reassessment to record topic-level improvement.</p>
            )}
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
            <p className="text-sm font-medium text-indigo-700">Current Priority</p>
            <p className="text-xl font-bold text-indigo-950">{actionPlan?.topic || scores.primaryGap}</p>
          </div>

          <Link to="/plan" className="inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
            Open action plan
          </Link>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}
