import { diagnosticQuestions } from "../data/questions";

export function roundScore(value) {
  return Math.round(value);
}

export function scoreLabel(score) {
  if (score >= 80) return "Strong";
  if (score >= 60) return "Needs Practice";
  return "Weak";
}

export function labelTone(label) {
  if (label === "Strong") return "strong";
  if (label === "Needs Practice") return "practice";
  return "weak";
}

function percent(correct, total) {
  if (!total) return 0;
  return roundScore((correct / total) * 100);
}

export function scoreDiagnostic(answers) {
  const topics = {};
  const categoryTotals = {
    DSA: { correct: 0, total: 0 },
    Python: { correct: 0, total: 0 },
    SQL: { correct: 0, total: 0 },
  };

  let correctAll = 0;

  diagnosticQuestions.forEach((q) => {
    const selected = answers[q.id];
    const isCorrect = selected === q.correctIndex;
    topics[q.topic] = isCorrect ? 100 : 0;
    categoryTotals[q.category].total += 1;
    if (isCorrect) {
      categoryTotals[q.category].correct += 1;
      correctAll += 1;
    }
  });

  const dsa = percent(categoryTotals.DSA.correct, categoryTotals.DSA.total);
  const python = percent(categoryTotals.Python.correct, categoryTotals.Python.total);
  const sql = percent(categoryTotals.SQL.correct, categoryTotals.SQL.total);
  const overall = percent(correctAll, diagnosticQuestions.length);

  return {
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
    answeredCorrect: correctAll,
    answeredTotal: diagnosticQuestions.length,
  };
}

export function scoreQuestionSet(questions, answers) {
  let correct = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctIndex) correct += 1;
  });
  return {
    correct,
    total: questions.length,
    percent: percent(correct, questions.length),
  };
}
