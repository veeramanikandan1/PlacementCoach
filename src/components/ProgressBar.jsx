export default function ProgressBar({ value, label }) {
  const pct = Math.max(0, Math.min(100, value || 0));
  return (
    <div>
      {label ? (
        <div className="mb-1 flex justify-between text-sm text-slate-600">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      ) : null}
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-indigo-600 transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
