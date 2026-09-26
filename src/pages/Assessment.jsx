import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { diagnosticQuestions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import EmptyState from "../components/EmptyState";
import { loadState } from "../utils/storage";
import { applyDiagnostic } from "../utils/engine";

export default function Assessment() {
  const navigate = useNavigate();
  const profile = loadState().profile;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");

  const question = diagnosticQuestions[index];
  const answeredCount = useMemo(
    () => diagnosticQuestions.filter((q) => answers[q.id] !== undefined).length,
    [answers]
  );
  const allAnswered = answeredCount === diagnosticQuestions.length;

  if (!profile) {
    return (
      <EmptyState
        title="Profile needed"
        message="Create a student profile before taking the diagnostic assessment."
        actionLabel="Go to profile"
        to="/profile"
      />
    );
  }

  function selectOption(optionIndex) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
    setMessage("");
  }

  function analyze() {
    if (!allAnswered) {
      const firstUnanswered = diagnosticQuestions.findIndex((q) => answers[q.id] === undefined);
      setMessage("Answer every question before analyzing readiness. Unanswered items are marked in the progress count.");
      if (firstUnanswered >= 0) setIndex(firstUnanswered);
      return;
    }
    applyDiagnostic(answers);
    navigate("/results");
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Diagnostic Assessment</h1>
        <p className="text-slate-600">15 placement questions across DSA, Python, and SQL.</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex justify-between text-sm text-slate-600">
          <span>
            Question {index + 1} of {diagnosticQuestions.length}
          </span>
          <span>
            Answered {answeredCount}/{diagnosticQuestions.length}
          </span>
        </div>
        <ProgressBar value={(answeredCount / diagnosticQuestions.length) * 100} />
      </div>

      <QuestionCard question={question} selected={answers[question.id]} onSelect={selectOption} />

      {message ? <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">{message}</p> : null}

      <div className="flex flex-wrap justify-between gap-3">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Previous
        </button>
        {index < diagnosticQuestions.length - 1 ? (
          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={analyze}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Analyze My Readiness
          </button>
        )}
      </div>
    </div>
  );
}
