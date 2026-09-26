import { Link } from "react-router-dom";

export default function EmptyState({ title, message, actionLabel, to }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">{message}</p>
      {to ? (
        <Link
          to={to}
          className="mt-5 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
