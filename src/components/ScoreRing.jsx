export default function ScoreRing({ score, size = 168 }) {
  const pct = Math.max(0, Math.min(100, score || 0));
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 132 132" className="h-full w-full -rotate-90">
        <circle cx="66" cy="66" r={r} fill="none" stroke="#e2e8f0" strokeWidth="12" />
        <circle
          cx="66"
          cy="66"
          r={r}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold text-slate-900">{pct}%</div>
        <div className="text-xs uppercase tracking-wide text-slate-500">Overall</div>
      </div>
    </div>
  );
}
