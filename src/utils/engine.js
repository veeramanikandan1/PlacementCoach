import { scoreDiagnostic, scoreQuestionSet, scoreLabel } from "./scoring";
import { detectGaps } from "./gaps";
import { buildActionPlan } from "./recommendations";
import { loadState, saveState } from "./storage";

export function applyDiagnostic(answers) {
  const prev = loadState();
  const scores = scoreDiagnostic(answers);
  const gaps = detectGaps(scores.topics);
  const actionPlan = buildActionPlan(gaps.primaryGap, gaps.primaryScore);
  const assessmentsCompleted = (prev.history?.assessmentsCompleted ?? 0) + 1;
  const initialOverall =
    prev.history?.initialOverall == null ? scores.overall : prev.history.initialOverall;

  return saveState({
    ...prev,
    isDemo: false,
    diagnostic: {
      answers,
      submittedAt: new Date().toISOString(),
      source: "assessment",
    },
    scores: { ...scores, ...gaps },
    actionPlan,
    reassessment: null,
    history: {
      ...prev.history,
      assessmentsCompleted,
      initialOverall,
      latestOverall: scores.overall,
      lastImprovement: prev.history?.lastImprovement ?? null,
    },
  });
}

export function applyReassessment(topic, questions, answers, beforeScore) {
  const prev = loadState();
  const result = scoreQuestionSet(questions, answers);
  const after = result.percent;
  const improvement = after - beforeScore;

  const topics = { ...(prev.scores?.topics ?? {}), [topic]: after };
  const gaps = detectGaps(topics);
  const actionPlan = buildActionPlan(gaps.primaryGap, gaps.primaryScore);

  const dsaTopics = ["Arrays", "Hashing", "Two Pointers", "Binary Search", "Time Complexity"];
  const pyTopics = ["Lists", "Dictionaries", "Functions", "OOP", "Exceptions"];
  const sqlTopics = ["SELECT/WHERE", "JOIN", "GROUP BY", "Aggregates", "Subqueries"];

  const avg = (keys) =>
    Math.round(keys.reduce((sum, key) => sum + (topics[key] ?? 0), 0) / keys.length);

  const dsa = avg(dsaTopics);
  const python = avg(pyTopics);
  const sql = avg(sqlTopics);
  const overall = Math.round((dsa + python + sql) / 3);

  const scores = {
    ...prev.scores,
    overall,
    dsa,
    python,
    sql,
    topics,
    categoryLabels: {
      DSA: scoreLabel(dsa),
      Python: scoreLabel(python),
      SQL: scoreLabel(sql),
    },
    overallLabel: scoreLabel(overall),
    ...gaps,
  };

  return saveState({
    ...prev,
    scores,
    actionPlan,
    reassessment: {
      topic,
      answers,
      before: beforeScore,
      after,
      improvement,
      correct: result.correct,
      total: result.total,
      submittedAt: new Date().toISOString(),
    },
    history: {
      ...prev.history,
      reassessmentsCompleted: (prev.history?.reassessmentsCompleted ?? 0) + 1,
      latestOverall: overall,
      lastImprovement: improvement,
    },
  });
}
