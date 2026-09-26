export const CATEGORIES = ["DSA", "Python", "SQL"];

export const TOPIC_ORDER = [
  "Arrays",
  "Hashing",
  "Two Pointers",
  "Binary Search",
  "Time Complexity",
  "Lists",
  "Dictionaries",
  "Functions",
  "OOP",
  "Exceptions",
  "SELECT/WHERE",
  "JOIN",
  "GROUP BY",
  "Aggregates",
  "Subqueries",
];

export const diagnosticQuestions = [
  {
    id: "dsa-1",
    category: "DSA",
    topic: "Arrays",
    difficulty: "Easy",
    question:
      "An array of n integers is given. You need the maximum sum of any contiguous subarray. Which approach is the correct linear-time solution?",
    options: [
      "Sort the array, then sum the last k elements",
      "Kadane’s algorithm: keep a running sum and reset it when it becomes negative",
      "Check every pair of indices with two nested loops only",
      "Put all values into a set and sum unique numbers",
    ],
    correctIndex: 1,
  },
  {
    id: "dsa-2",
    category: "DSA",
    topic: "Hashing",
    difficulty: "Medium",
    question:
      "You must return indices of two numbers that add up to a target. The array is unsorted. What is the expected O(n) approach?",
    options: [
      "Sort, then use two pointers, then search original indices with another O(n) scan only",
      "For each number, binary search the complement in the original unsorted array",
      "Scan once, storing each value’s index in a hash map and looking up target − current",
      "Count frequencies in a hash map and then sort the keys",
    ],
    correctIndex: 2,
  },
  {
    id: "dsa-3",
    category: "DSA",
    topic: "Two Pointers",
    difficulty: "Medium",
    question:
      "A 1-indexed array is sorted in non-decreasing order. You must find two numbers that add to target and return their indices. Which method is correct and O(n)?",
    options: [
      "Start left at 0 and right at n−1; move the pointer on the side that makes the sum closer to target",
      "Use a nested loop from both ends of the array",
      "Hash every prefix sum and look for target",
      "Reverse the array, then binary search each element",
    ],
    correctIndex: 0,
  },
  {
    id: "dsa-4",
    category: "DSA",
    topic: "Binary Search",
    difficulty: "Medium",
    question:
      "You search for a target in a sorted array that may have been rotated (e.g. [4,5,6,7,0,1,2]). What is the key binary-search insight?",
    options: [
      "Always search the left half because rotation only affects the right",
      "At least one of the two halves around mid is still sorted; use that to decide where the target can exist",
      "Binary search cannot work after rotation; you must scan linearly",
      "Convert the array to a set, then binary search the set",
    ],
    correctIndex: 1,
  },
  {
    id: "dsa-5",
    category: "DSA",
    topic: "Time Complexity",
    difficulty: "Easy",
    question:
      "A loop runs n times. Inside it, a hash map lookup is O(1) average and another loop runs n times over the same array. What is the overall average time complexity?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(1)",
    ],
    correctIndex: 2,
  },
  {
    id: "py-1",
    category: "Python",
    topic: "Lists",
    difficulty: "Easy",
    question: "What does nums = [1, 2, 3, 4, 5]; print(nums[1:4]) output?",
    options: ["[1, 2, 3, 4]", "[2, 3, 4]", "[2, 3, 4, 5]", "[1, 2, 3]"],
    correctIndex: 1,
  },
  {
    id: "py-2",
    category: "Python",
    topic: "Dictionaries",
    difficulty: "Medium",
    question:
      "You count character frequencies in a string. Why is counts.get(ch, 0) + 1 preferred over counts[ch] + 1 on the first occurrence?",
    options: [
      "get is faster than [] for every access",
      "[] cannot be used with string keys",
      "[] raises KeyError if the key is missing; get returns the default instead",
      "get automatically sorts the dictionary",
    ],
    correctIndex: 2,
  },
  {
    id: "py-3",
    category: "Python",
    topic: "Functions",
    difficulty: "Medium",
    question:
      "def add_item(item, bag=[]): bag.append(item); return bag is a common bug. Why?",
    options: [
      "Lists cannot be function arguments in Python",
      "The default list is created once and shared across calls, so later calls see earlier appends",
      "append always returns None so the function cannot return bag",
      "Default arguments are evaluated on every call, wiping previous items",
    ],
    correctIndex: 1,
  },
  {
    id: "py-4",
    category: "Python",
    topic: "OOP",
    difficulty: "Easy",
    question:
      "In a Python class method that uses instance data, why is the first parameter conventionally named self?",
    options: [
      "It is required syntax; using another name is a syntax error",
      "It refers to the class object, not the instance",
      "Python passes the instance as the first argument; self is the conventional name for that instance",
      "self makes the method static so it can be called without an object",
    ],
    correctIndex: 2,
  },
  {
    id: "py-5",
    category: "Python",
    topic: "Exceptions",
    difficulty: "Medium",
    question:
      "In try / except / else / finally, when does the else block run?",
    options: [
      "Always, including when an exception is raised",
      "Only when an exception is raised",
      "Only when no exception is raised in the try block",
      "After finally, and it replaces the return value",
    ],
    correctIndex: 2,
  },
  {
    id: "sql-1",
    category: "SQL",
    topic: "SELECT/WHERE",
    difficulty: "Easy",
    question:
      "Which query returns employees with salary strictly greater than 50000 in department 'Eng'?",
    options: [
      "SELECT * FROM employees WHERE salary > 50000 OR department = 'Eng';",
      "SELECT * FROM employees WHERE salary > 50000 AND department = 'Eng';",
      "SELECT * FROM employees HAVING salary > 50000 AND department = 'Eng';",
      "SELECT salary > 50000 FROM employees WHERE department = 'Eng';",
    ],
    correctIndex: 1,
  },
  {
    id: "sql-2",
    category: "SQL",
    topic: "JOIN",
    difficulty: "Medium",
    question:
      "You need every employee, including those with no matching row in departments. Which join is correct?",
    options: [
      "FROM employees e INNER JOIN departments d ON e.dept_id = d.id",
      "FROM employees e LEFT JOIN departments d ON e.dept_id = d.id",
      "FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id",
      "FROM employees e CROSS JOIN departments d",
    ],
    correctIndex: 1,
  },
  {
    id: "sql-3",
    category: "SQL",
    topic: "GROUP BY",
    difficulty: "Medium",
    question:
      "You want the number of orders per customer_id. Which query is valid?",
    options: [
      "SELECT customer_id, COUNT(*) FROM orders;",
      "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
      "SELECT COUNT(*) FROM orders GROUP BY order_id, customer_id HAVING customer_id;",
      "SELECT customer_id FROM orders GROUP BY COUNT(*);",
    ],
    correctIndex: 1,
  },
  {
    id: "sql-4",
    category: "SQL",
    topic: "Aggregates",
    difficulty: "Easy",
    question:
      "Which statement about AVG, COUNT, SUM is true?",
    options: [
      "COUNT(*) ignores NULL rows in the table",
      "AVG(column) includes NULL numeric values as zeros",
      "COUNT(column) ignores NULL values in that column; COUNT(*) counts rows",
      "SUM never ignores NULL and treats them as 1",
    ],
    correctIndex: 2,
  },
  {
    id: "sql-5",
    category: "SQL",
    topic: "Subqueries",
    difficulty: "Hard",
    question:
      "Find employees whose salary is greater than the average salary of their own department. Which pattern is appropriate?",
    options: [
      "WHERE salary > AVG(salary) in the same SELECT without GROUP BY",
      "A correlated subquery: salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.dept_id = e.dept_id)",
      "INNER JOIN departments only, because joins cannot compare to averages",
      "HAVING salary > AVG(salary) without grouping, which filters rows before aggregation",
    ],
    correctIndex: 1,
  },
];
