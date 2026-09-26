import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import EmptyState from "../components/EmptyState";
import { getReassessmentQuestions } from "../data/reassessmentQuestions";
import { loadState, updateState } from "../utils/storage";
import { applyReassessment } from "../utils/engine";

export default function Reassessment() {
  const state = loadState();
  const topic = state.scores?.primaryGap;
  const before = state.scores?.topics?.[topic];
  const questions = useMemo(() => (topic ? getReassessmentQuestions(topic) : []), [topic]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const [version, setVersion] = useState(0);
  const result = version >= 0 && state.reassessment && state.reassessment.topic === topic ? state.reassessment : null;

  if (!topic || !state.scores) {
    return (
      <EmptyState
        title="Assessment not completed"
        message="You need a diagnostic result before a targeted reassessment."
        actionLabel="Start assessment"
        to="/assessment"
      />
    );
  }

  if (!questions.length) {
    return (
      <EmptyState
        title="Reassessment unavailable"
        message="No questions were found for this topic."
        actionLabel="Back to plan"
        to="/plan"
      />
    );
  }

  if (result) {
    const good = result.improvement >= 20;
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Your progress</h1>
        <p className="text-slate-600">
          {topic} reassessment · {result.correct}/{result.total} correct
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Before</p>
            <p className="text-3xl font-bold">{result.before}%</p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">After</p>
            <p className="text-3xl font-bold text-indigo-700">{result.after}%</p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Improvement</p>
            <p className="text-3xl font-bold">
              {result.improvement >= 0 ? "+" : ""}
              {result.improvement} percentage points
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm text-slate-600">Before → After</p>
          <ProgressBar value={result.before} label="Before" />
          <div className="mt-3">
            <ProgressBar value={result.after} label="After" />
          </div>
        </div>
        <div className={`rounded-xl p-5 ${good ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-950"}`}>
          {good
            ? "Great progress. Your next priority can now move to another weak area."
            : "Keep practicing this topic and reassess again."}
        </div>
        <p className="text-sm text-slate-500">
          This comparison is only for {topic}. It does not mean you are placement-ready overall.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/progress" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
            View dashboard
          </Link>
          <Link to="/plan" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">
            Updated action plan
          </Link>
          <button
            type="button"
            onClick={() => {
              updateState({ reassessment: null });
              setAnswers({});
              setIndex(0);
              setMessage("");
              setVersion((v) => v + 1);
            }}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium"
          >
            Reassess this topic again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[index];
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;

  function submit() {
    if (answeredCount !== questions.length) {
      setMessage("Answer all 5 questions before seeing progress.");
      const first = questions.findIndex((q) => answers[q.id] === undefined);
      if (first >= 0) setIndex(first);
      return;
    }
    applyReassessment(topic, questions, answers, before ?? 0);
    setMessage("");
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Reassessment · {topic}</h1>
        <p className="text-slate-600">5 questions focused on your current weakest topic. Previous score: {before ?? 0}%.</p>
      </div>
      <ProgressBar value={(answeredCount / questions.length) * 100} label={`Question ${index + 1} of ${questions.length}`} />
      <QuestionCard question={question} selected={answers[question.id]} onSelect={(opt) => setAnswers((p) => ({ ...p, [question.id]: opt }))} />
      {message ? <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">{message}</p> : null}
      <div className="flex justify-between">
        <button type="button" disabled={index === 0} onClick={() => setIndex((i) => i - 1)} className="rounded-lg border px-4 py-2 text-sm disabled:opacity-40">
          Previous
        </button>
        {index < questions.length - 1 ? (
          <button type="button" onClick={() => setIndex((i) => i + 1)} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
            Next
          </button>
        ) : (
          <button type="button" onClick={submit} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
            See my progress
          </button>
        )}
      </div>
    </div>
  );
}
