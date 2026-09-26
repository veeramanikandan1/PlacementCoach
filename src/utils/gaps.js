import { TOPIC_ORDER } from "../data/questions";
import { scoreLabel } from "./scoring";

export function detectGaps(topicScores) {
  const ranked = TOPIC_ORDER.map((topic) => ({
    topic,
    score: topicScores[topic] ?? 0,
    label: scoreLabel(topicScores[topic] ?? 0),
  })).sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return TOPIC_ORDER.indexOf(a.topic) - TOPIC_ORDER.indexOf(b.topic);
  });

  const primary = ranked[0];
  const secondary = ranked[1];

  return {
    primaryGap: primary?.topic ?? null,
    primaryScore: primary?.score ?? 0,
    secondaryGap: secondary?.topic ?? null,
    secondaryScore: secondary?.score ?? 0,
    rankedTopics: ranked,
  };
}

export function gapExplanation(primaryTopic) {
  return {
    headline: `Your biggest current gap is ${primaryTopic}.`,
    why: `Your assessment shows that ${primaryTopic} is currently one of your weakest placement skills.`,
    detail:
      "Your performance in this topic was lower than your other assessed areas.",
  };
}
