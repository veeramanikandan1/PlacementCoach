import { actionPlans } from "../data/actions";
import { gapExplanation } from "./gaps";

export function buildActionPlan(topic, currentScore) {
  const preset = actionPlans[topic];
  const copy = gapExplanation(topic);

  return {
    topic,
    currentScore,
    goal: 80,
    learn: preset?.learn ?? `Review the fundamentals of ${topic}.`,
    practice: preset?.practice ?? [`Practice 3 ${topic} problems`],
    learnMinutes: preset?.learnMinutes ?? 20,
    practiceMinutes: preset?.practiceMinutes ?? 30,
    reassessCount: 5,
    headline: copy.headline,
    why: copy.why,
    detail: copy.detail,
    focusMessage:
      "Focus on one weakness at a time instead of trying to study everything.",
  };
}
