const styles = {
  Strong: "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Needs Practice": "bg-amber-50 text-amber-800 border-amber-200",
  Weak: "bg-rose-50 text-rose-800 border-rose-200",
};

export default function StatusBadge({ label }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[label] || "bg-slate-100 text-slate-700"}`}>
      {label}
    </span>
  );
}
