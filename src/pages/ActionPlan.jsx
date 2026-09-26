import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import { loadState } from "../utils/storage";

export default function ActionPlan() {
  const { actionPlan, scores } = loadState();

  if (!actionPlan || !scores) {
    return (
      <EmptyState
        title="No action plan yet"
        message="Finish the assessment so PlacementCoach can recommend one next topic."
        actionLabel="Start assessment"
        to="/assessment"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Your Next Best Action</h1>
        <p className="text-slate-600">{actionPlan.focusMessage}</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">{actionPlan.topic}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Current Score</p>
            <p className="text-2xl font-bold">{actionPlan.currentScore}%</p>
          </div>
          <div className="rounded-lg bg-indigo-50 p-4">
            <p className="text-xs text-indigo-700">Goal</p>
            <p className="text-2xl font-bold text-indigo-900">80%+</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-indigo-600">STEP 1</p>
          <h2 className="mt-1 font-semibold">Learn the fundamentals</h2>
          <p className="mt-2 text-slate-600">{actionPlan.learn}</p>
          <p className="mt-2 text-sm text-slate-500">Estimated time: {actionPlan.learnMinutes} minutes</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-indigo-600">STEP 2</p>
          <h2 className="mt-1 font-semibold">Practice 3 targeted problems</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            {actionPlan.practice.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-slate-500">Estimated time: {actionPlan.practiceMinutes} minutes</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-indigo-600">STEP 3</p>
          <h2 className="mt-1 font-semibold">Take a 5-question reassessment</h2>
          <p className="mt-2 text-slate-600">
            Reassess {actionPlan.topic} with {actionPlan.reassessCount} questions to measure whether this gap improved.
          </p>
        </div>
      </div>

      <Link
        to="/reassessment"
        className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
      >
        Start Reassessment
      </Link>
    </div>
  );
}
