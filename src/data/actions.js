export const actionPlans = {
  Arrays: {
    learn: "Index ranges, in-place updates, prefix sums, and contiguous subarray patterns.",
    practice: [
      "Maximum subarray (Kadane)",
      "Move zeroes",
      "Rotate array",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  Hashing: {
    learn: "Hash maps, frequency counting, complement lookup, and first-occurrence patterns.",
    practice: [
      "Two Sum",
      "First unique character",
      "Subarray sum equals K",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  "Two Pointers": {
    learn: "Opposite-end pointers on sorted arrays, palindrome checks, and shrinking windows.",
    practice: [
      "Two Sum II (sorted)",
      "Valid palindrome",
      "Container with most water",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  "Binary Search": {
    learn: "Search space, mid overflow-safe formula, and boundary conditions (first True / last False).",
    practice: [
      "Binary search",
      "Search in rotated sorted array",
      "Find first and last position",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  "Time Complexity": {
    learn: "Loop nesting, hash vs sort tradeoffs, and how to drop lower-order terms.",
    practice: [
      "Classify 5 loop snippets",
      "Compare hashmap vs sorting solutions",
      "Solve a recurrence T(n)=T(n/2)+O(1)",
    ],
    learnMinutes: 20,
    practiceMinutes: 25,
  },
  Lists: {
    learn: "Indexing, slicing, mutability, and copying vs aliasing.",
    practice: [
      "Reverse a list in place",
      "List comprehension filters",
      "Copy vs reference pitfall",
    ],
    learnMinutes: 15,
    practiceMinutes: 25,
  },
  Dictionaries: {
    learn: "keys, values, get(), iteration, and frequency counting.",
    practice: [
      "Character frequency map",
      "Group anagrams with a dict",
      "Safe increment with get",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  Functions: {
    learn: "return vs None, default arguments, *args/**kwargs, and avoiding mutable defaults.",
    practice: [
      "Rewrite a mutable-default function",
      "Write a function with *args",
      "Return multiple values as a tuple",
    ],
    learnMinutes: 15,
    practiceMinutes: 25,
  },
  OOP: {
    learn: "self, __init__, instance vs class data, and basic inheritance.",
    practice: [
      "Implement a simple class with __init__",
      "Override a method in a subclass",
      "Use super().__init__",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  Exceptions: {
    learn: "try/except/else/finally, catching specific errors, and when to re-raise.",
    practice: [
      "Parse ints with try/except",
      "Use else vs finally correctly",
      "Catch ValueError without hiding bugs",
    ],
    learnMinutes: 15,
    practiceMinutes: 25,
  },
  "SELECT/WHERE": {
    learn: "SELECT columns, WHERE filters, LIKE, BETWEEN, and IS NULL.",
    practice: [
      "Filter by department and salary",
      "LIKE prefix search",
      "IS NULL vs = NULL",
    ],
    learnMinutes: 15,
    practiceMinutes: 25,
  },
  JOIN: {
    learn: "INNER JOIN, LEFT JOIN, and matching rows on a key.",
    practice: [
      "Employees with department names",
      "Employees with no department (LEFT JOIN)",
      "Join three tables on keys",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  "GROUP BY": {
    learn: "Grouping rows, SELECT rules, and HAVING vs WHERE.",
    practice: [
      "Orders per customer",
      "HAVING COUNT(*) > n",
      "Group by two columns",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
  Aggregates: {
    learn: "COUNT, SUM, AVG, MIN, MAX, and how NULLs are treated.",
    practice: [
      "Average salary by dept",
      "COUNT vs COUNT(column)",
      "MIN/MAX with a filter",
    ],
    learnMinutes: 15,
    practiceMinutes: 25,
  },
  Subqueries: {
    learn: "IN/EXISTS, scalar subqueries, and correlated vs uncorrelated subqueries.",
    practice: [
      "Salary above company average",
      "EXISTS matching pattern",
      "Correlated dept average comparison",
    ],
    learnMinutes: 20,
    practiceMinutes: 30,
  },
};
