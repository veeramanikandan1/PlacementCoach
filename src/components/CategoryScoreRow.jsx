import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";

export default function CategoryScoreRow({ name, score, label }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="font-medium text-slate-800">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-700">{score}%</span>
          <StatusBadge label={label} />
        </div>
      </div>
      <ProgressBar value={score} />
    </div>
  );
}
