export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">
          {question.category}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{question.topic}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{question.difficulty}</span>
      </div>
      <h2 className="text-lg font-semibold leading-snug text-slate-900">{question.question}</h2>
      <div className="mt-4 grid gap-2">
        {question.options.map((option, index) => {
          const active = selected === index;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(index)}
              className={`rounded-lg border px-3 py-3 text-left text-sm ${
                active
                  ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200"
              }`}
            >
              <span className="mr-2 font-semibold">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
