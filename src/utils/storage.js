const KEY = "placementcoach.state.v1";

const emptyState = () => ({
  profile: null,
  diagnostic: null,
  scores: null,
  actionPlan: null,
  reassessment: null,
  history: {
    assessmentsCompleted: 0,
    reassessmentsCompleted: 0,
    initialOverall: null,
    latestOverall: null,
    lastImprovement: null,
  },
  isDemo: false,
});

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyState();
    return { ...emptyState(), ...JSON.parse(raw) };
  } catch {
    return emptyState();
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
  return state;
}

export function updateState(patch) {
  const next = { ...loadState(), ...patch };
  return saveState(next);
}

export function resetState() {
  localStorage.removeItem(KEY);
  return emptyState();
}

export { emptyState };
