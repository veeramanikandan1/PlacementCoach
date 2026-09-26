import { detectGaps } from "./gaps";
import { buildActionPlan } from "./recommendations";
import { saveState } from "./storage";

export function demoProfile() {
  return {
    name: "Arun Kumar",
    college: "NIT Example",
    branch: "Computer Science",
    year: "3rd Year",
    targetRole: "Software Developer",
    language: "Python",
    experience: "Intermediate",
  };
}

export function demoScores() {
  const topics = {
    Arrays: 80,
    Hashing: 20,
    "Two Pointers": 40,
    "Binary Search": 40,
    "Time Complexity": 45,
    Lists: 80,
    Dictionaries: 60,
    Functions: 100,
    OOP: 60,
    Exceptions: 75,
    "SELECT/WHERE": 80,
    JOIN: 80,
    "GROUP BY": 80,
    Aggregates: 80,
    Subqueries: 80,
  };

  const dsa = 45;
  const python = 75;
  const sql = 80;
  const overall = Math.round((dsa + python + sql) / 3);

  return {
    overall,
    dsa,
    python,
    sql,
    topics,
    categoryLabels: {
      DSA: "Weak",
      Python: "Needs Practice",
      SQL: "Strong",
    },
    overallLabel: overall >= 80 ? "Strong" : overall >= 60 ? "Needs Practice" : "Weak",
    answeredCorrect: null,
    answeredTotal: 15,
    source: "demo",
  };
}

export function buildDemoState() {
  const scores = demoScores();
  const gaps = detectGaps(scores.topics);
  const actionPlan = buildActionPlan(gaps.primaryGap, gaps.primaryScore);

  return saveState({
    profile: demoProfile(),
    diagnostic: {
      answers: {},
      submittedAt: new Date().toISOString(),
      source: "demo",
    },
    scores: { ...scores, ...gaps },
    actionPlan,
    reassessment: null,
    history: {
      assessmentsCompleted: 1,
      reassessmentsCompleted: 0,
      initialOverall: scores.overall,
      latestOverall: scores.overall,
      lastImprovement: null,
    },
    isDemo: true,
  });
}
