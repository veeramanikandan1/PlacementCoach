const mcq = (id, topic, category, difficulty, question, options, correctIndex) => ({
  id,
  topic,
  category,
  difficulty,
  question,
  options,
  correctIndex,
});

export const reassessmentBanks = {
  Arrays: [
    mcq("arr-r1", "Arrays", "DSA", "Easy", "nums = [2, 7, 11, 15]. After reversing in place, what is nums[0]?", ["15", "2", "7", "11"], 0),
    mcq("arr-r2", "Arrays", "DSA", "Medium", "You rotate an array right by k = 1: [1,2,3,4,5] becomes?", ["[5,1,2,3,4]", "[2,3,4,5,1]", "[1,2,3,5,4]", "[4,5,1,2,3]"], 0),
    mcq("arr-r3", "Arrays", "DSA", "Easy", "Which index access is invalid for an array of length n?", ["0", "n-1", "n // 2", "n"], 3),
    mcq("arr-r4", "Arrays", "DSA", "Medium", "To move all zeros to the end while keeping other order, the linear in-place idea is:", ["Sort the array", "Two writes: copy non-zeros forward, then fill the rest with zeros", "Use a nested loop swapping every pair", "Put values in a set"], 1),
    mcq("arr-r5", "Arrays", "DSA", "Easy", "Best-case time to find the maximum in an unsorted array of n distinct numbers is:", ["O(1)", "O(log n)", "O(n)", "O(n²)"], 2),
  ],
  Hashing: [
    mcq("hash-r1", "Hashing", "DSA", "Easy", "Average-time lookup in a hash map (dictionary) is typically:", ["O(n)", "O(log n)", "O(1)", "O(n log n)"], 2),
    mcq("hash-r2", "Hashing", "DSA", "Medium", "First non-repeating character in a string is found efficiently by:", ["Sorting characters", "Two passes: frequency map, then scan for count == 1", "A nested loop only", "Binary search on the string"], 1),
    mcq("hash-r3", "Hashing", "DSA", "Medium", "Two strings are anagrams if:", ["They have the same length only", "Their character frequency maps are equal", "One is a prefix of the other", "They sort to different strings"], 1),
    mcq("hash-r4", "Hashing", "DSA", "Easy", "You store seen numbers while scanning once to detect a duplicate. This uses:", ["A hash set", "Binary search tree only", "Two pointers on a sorted copy only", "A queue of size n²"], 0),
    mcq("hash-r5", "Hashing", "DSA", "Hard", "Subarray sum equals k can be solved in O(n) using:", ["Kadane only", "Prefix sums stored in a hash map of frequencies", "Sorting the array", "Two nested hash maps of size n²"], 1),
  ],
  "Two Pointers": [
    mcq("tp-r1", "Two Pointers", "DSA", "Easy", "For a sorted array, a pair summing to target is found by moving:", ["Both pointers randomly", "Left++ if sum is too small, right-- if sum is too large", "Only the left pointer", "Mid only, like binary search on indices independently"], 1),
    mcq("tp-r2", "Two Pointers", "DSA", "Medium", "Valid palindrome ignoring non-alphanumerics uses two pointers that:", ["Always move together by 1", "Skip non-alphanumeric characters from both ends, then compare", "Only compare the first and last index once", "Sort the string first, then use one pointer"], 1),
    mcq("tp-r3", "Two Pointers", "DSA", "Medium", "Container With Most Water: you move the pointer at the shorter line because:", ["The width always increases", "Width shrinks by 1; only a taller line can improve area", "Height does not matter", "You must move both pointers every time"], 1),
    mcq("tp-r4", "Two Pointers", "DSA", "Easy", "Removing duplicates from a sorted array in place is typically:", ["Fast/slow write pointers", "A hash map of indices only", "Recursion on n/2", "Sorting again"], 0),
    mcq("tp-r5", "Two Pointers", "DSA", "Medium", "Three-sum (triplets to 0) after sorting uses:", ["Hashing only with no pointers", "Fix one index, two-pointer the rest", "Binary search on unsorted input", "BFS"], 1),
  ],
  "Binary Search": [
    mcq("bs-r1", "Binary Search", "DSA", "Easy", "Binary search on a sorted array of n elements has complexity:", ["O(n)", "O(log n)", "O(1)", "O(n²)"], 1),
    mcq("bs-r2", "Binary Search", "DSA", "Medium", "To find the first True in a boolean array [F,F,F,T,T], you:", ["Scan from the right only", "Binary search the boundary: if mid is True, look left including mid", "Always look right if mid is True", "Hash the values"], 1),
    mcq("bs-r3", "Binary Search", "DSA", "Medium", "Search space on answers (e.g. min capacity to ship packages) works when:", ["The feasibility predicate is monotonic", "The array is unsorted and non-monotonic", "You cannot test a candidate", "n is always < 3"], 0),
    mcq("bs-r4", "Binary Search", "DSA", "Easy", "If low, high, mid = low + (high-low)//2 and target > nums[mid], next is:", ["high = mid - 1", "low = mid + 1", "low = mid", "high = mid"], 1),
    mcq("bs-r5", "Binary Search", "DSA", "Hard", "Peak element in an array can be found in O(log n) because:", ["A peak always exists and you can discard the side that cannot contain a greater neighbor path", "Every array is sorted", "Hashing finds peaks", "You only check index 0"], 0),
  ],
  "Time Complexity": [
    mcq("tc-r1", "Time Complexity", "DSA", "Easy", "A single loop i = 0..n-1 with O(1) body is:", ["O(n)", "O(n²)", "O(log n)", "O(2^n)"], 0),
    mcq("tc-r2", "Time Complexity", "DSA", "Medium", "for i in 0..n: for j in i..n: O(1) is:", ["O(n)", "O(n log n)", "O(n²)", "O(n³)"], 2),
    mcq("tc-r3", "Time Complexity", "DSA", "Easy", "Binary search then an O(n) scan is dominated by:", ["O(log n)", "O(n)", "O(n log n)", "O(1)"], 1),
    mcq("tc-r4", "Time Complexity", "DSA", "Medium", "Building a frequency map of n items then iterating unique keys k ≤ n is:", ["O(n + k) which is O(n)", "O(n²) always", "O(1)", "O(k log n) always"], 0),
    mcq("tc-r5", "Time Complexity", "DSA", "Hard", "Recurrence T(n) = T(n/2) + O(1) solves to:", ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], 1),
  ],
  Lists: [
    mcq("li-r1", "Lists", "Python", "Easy", "[1,2,3] + [4] equals:", ["[1,2,3,4]", "[1,2,7]", "[4,1,2,3]", "Error"], 0),
    mcq("li-r2", "Lists", "Python", "Easy", "lst[-1] on [10,20,30] is:", ["10", "20", "30", "Error"], 2),
    mcq("li-r3", "Lists", "Python", "Medium", "a = [1,2]; b = a; b.append(3); a is:", ["[1,2]", "[1,2,3]", "[3]", "[]"], 1),
    mcq("li-r4", "Lists", "Python", "Medium", "List comprehension [x*x for x in range(4) if x % 2 == 0] is:", ["[0, 4]", "[0, 1, 4, 9]", "[1, 9]", "[0, 2, 4]"], 0),
    mcq("li-r5", "Lists", "Python", "Easy", "nums.pop() on [1,2,3] removes and returns:", ["1", "2", "3", "None"], 2),
  ],
  Dictionaries: [
    mcq("di-r1", "Dictionaries", "Python", "Easy", "d = {'a': 1}; d.get('b', 0) returns:", ["None", "0", "KeyError", "'b'"], 1),
    mcq("di-r2", "Dictionaries", "Python", "Medium", "for k, v in d.items() iterates:", ["keys only", "values only", "key-value pairs", "sorted keys always"], 2),
    mcq("di-r3", "Dictionaries", "Python", "Easy", "d['x'] = d.get('x', 0) + 1 is used to:", ["Delete x", "Increment a counter safely", "Sort the dict", "Convert keys to ints"], 1),
    mcq("di-r4", "Dictionaries", "Python", "Medium", "Which is a valid dict key?", ["[1,2]", "{'a':1}", "(1, 2)", "set([1])"], 2),
    mcq("di-r5", "Dictionaries", "Python", "Hard", "Two dicts merge in 3.9+ with z = {**a, **b} so later keys:", ["are dropped", "overwrite earlier keys", "raise always", "append as lists"], 1),
  ],
  Functions: [
    mcq("fn-r1", "Functions", "Python", "Easy", "A function without return yields:", ["0", "False", "None", "Error"], 2),
    mcq("fn-r2", "Functions", "Python", "Medium", "Safe default for a list argument is:", ["bag=[]", "bag=None and create a new list inside", "bag=list", "bag=() always"], 1),
    mcq("fn-r3", "Functions", "Python", "Easy", "*args collects:", ["keyword args", "extra positional args as a tuple", "only lists", "global variables"], 1),
    mcq("fn-r4", "Functions", "Python", "Medium", "**kwargs collects:", ["positional extras", "extra keyword args as a dict", "return values", "decorators"], 1),
    mcq("fn-r5", "Functions", "Python", "Hard", "A closure remembers:", ["Only global state", "Variables from the enclosing scope", "Nothing after return", "Only integers"], 1),
  ],
  OOP: [
    mcq("oop-r1", "OOP", "Python", "Easy", "__init__ is:", ["A destructor", "The constructor/initializer", "Required to be named init without underscores", "A static method always"], 1),
    mcq("oop-r2", "OOP", "Python", "Medium", "super().__init__() in a subclass:", ["Creates a new unrelated class", "Calls the parent initializer", "Deletes the parent", "Is illegal in Python"], 1),
    mcq("oop-r3", "OOP", "Python", "Easy", "self.x = 1 stores x on:", ["the class only", "the instance", "a global", "a tuple"], 1),
    mcq("oop-r4", "OOP", "Python", "Medium", "@staticmethod means the method:", ["receives self", "receives cls", "does not receive the instance or class automatically", "cannot be called"], 2),
    mcq("oop-r5", "OOP", "Python", "Hard", "Method resolution order (MRO) is used for:", ["Sorting lists", "Determining which parent method to call with multiple inheritance", "Dict hashing", "Exception matching only"], 1),
  ],
  Exceptions: [
    mcq("ex-r1", "Exceptions", "Python", "Easy", "ZeroDivisionError is raised by:", ["1/1", "1/0", "int('1')", "len([])"], 1),
    mcq("ex-r2", "Exceptions", "Python", "Medium", "finally runs:", ["only on success", "only on error", "whether or not an exception occurred", "never with return"], 2),
    mcq("ex-r3", "Exceptions", "Python", "Easy", "except ValueError catches:", ["all errors", "ValueError and its subclasses", "syntax errors only", "nothing"], 1),
    mcq("ex-r4", "Exceptions", "Python", "Medium", "raise ValueError('bad') does:", ["print and continue", "create and throw that exception", "return None", "exit the interpreter silently"], 1),
    mcq("ex-r5", "Exceptions", "Python", "Hard", "except Exception is broader than except ValueError because:", ["Exception is a subclass of ValueError", "ValueError is a subclass of Exception", "they are unrelated", "Exception only catches syntax errors"], 1),
  ],
  "SELECT/WHERE": [
    mcq("sw-r1", "SELECT/WHERE", "SQL", "Easy", "Filter rows before grouping with:", ["HAVING", "WHERE", "ORDER BY", "LIMIT only"], 1),
    mcq("sw-r2", "SELECT/WHERE", "SQL", "Easy", "SQL string match for names starting with 'A' uses:", ["WHERE name = 'A%'", "WHERE name LIKE 'A%'", "WHERE name STARTS 'A'", "WHERE name IN 'A'"], 1),
    mcq("sw-r3", "SELECT/WHERE", "SQL", "Medium", "NULL comparisons: WHERE col = NULL is:", ["true for all NULLs", "unknown; use IS NULL", "false only", "a syntax error always"], 1),
    mcq("sw-r4", "SELECT/WHERE", "SQL", "Easy", "SELECT DISTINCT city FROM users returns:", ["duplicate cities", "unique city values", "count of cities", "sorted ids"], 1),
    mcq("sw-r5", "SELECT/WHERE", "SQL", "Medium", "WHERE salary BETWEEN 50 AND 100 includes:", ["50 and 100", "only 50", "only 100", "neither bound"], 0),
  ],
  JOIN: [
    mcq("jo-r1", "JOIN", "SQL", "Easy", "INNER JOIN returns rows:", ["from left even without a match", "only when the join condition matches", "from right only", "a cartesian product always"], 1),
    mcq("jo-r2", "JOIN", "SQL", "Medium", "LEFT JOIN and no match on the right fills right columns with:", ["0", "''", "NULL", "the left key"], 2),
    mcq("jo-r3", "JOIN", "SQL", "Medium", "Missing ON clause with comma joins / CROSS JOIN yields:", ["one row", "cartesian product", "an error always in every dialect", "INNER JOIN behavior"], 1),
    mcq("jo-r4", "JOIN", "SQL", "Easy", "Join employees to departments on dept id is typically:", ["ON e.dept_id = d.id", "WHERE e.name = d.name only", "GROUP BY e.id", "HAVING e.dept_id"], 0),
    mcq("jo-r5", "JOIN", "SQL", "Hard", "To keep unmatched department rows as well as unmatched employees you need:", ["INNER JOIN", "LEFT JOIN only", "FULL OUTER JOIN (or union of left and right joins)", "CROSS JOIN"], 2),
  ],
  "GROUP BY": [
    mcq("gb-r1", "GROUP BY", "SQL", "Easy", "Non-aggregated SELECT columns must:", ["be omitted or appear in GROUP BY", "always be in HAVING", "be DISTINCT only", "be in LIMIT"], 0),
    mcq("gb-r2", "GROUP BY", "SQL", "Medium", "HAVING is applied:", ["before WHERE", "after grouping, to groups", "only to JOINs", "instead of SELECT"], 1),
    mcq("gb-r3", "GROUP BY", "SQL", "Easy", "COUNT(*) with GROUP BY department_id counts:", ["all rows in the table once", "rows per department", "NULL departments only", "columns"], 1),
    mcq("gb-r4", "GROUP BY", "SQL", "Medium", "To keep groups with more than 5 rows:", ["WHERE COUNT(*) > 5", "HAVING COUNT(*) > 5", "ON COUNT(*) > 5", "LIMIT 5"], 1),
    mcq("gb-r5", "GROUP BY", "SQL", "Hard", "GROUP BY 1 in some engines means:", ["group by the first SELECT expression", "group by primary key", "invalid always", "group by COUNT"], 0),
  ],
  Aggregates: [
    mcq("ag-r1", "Aggregates", "SQL", "Easy", "MAX(salary) returns:", ["all salaries", "the largest salary in the set", "the count", "the average"], 1),
    mcq("ag-r2", "Aggregates", "SQL", "Easy", "MIN(salary) returns:", ["the smallest non-NULL salary in the set", "always 0", "the row count", "the first inserted salary"], 0),
    mcq("ag-r3", "Aggregates", "SQL", "Medium", "AVG ignores:", ["zeros", "NULL values in that column", "negative numbers", "the last row"], 1),
    mcq("ag-r4", "Aggregates", "SQL", "Medium", "COUNT(DISTINCT user_id) counts:", ["all rows", "unique non-NULL user_id values", "NULL user_ids", "duplicates only"], 1),
    mcq("ag-r5", "Aggregates", "SQL", "Hard", "You can mix AVG(salary) and department in SELECT only if:", ["you GROUP BY department (or it is functionally dependent)", "you use WHERE AVG", "you omit FROM", "you ORDER BY 2 always"], 0),
  ],
  Subqueries: [
    mcq("sq-r1", "Subqueries", "SQL", "Easy", "A subquery in WHERE x IN (...) should return:", ["one column typically", "an unordered dict", "DDL statements", "indexes"], 0),
    mcq("sq-r2", "Subqueries", "SQL", "Medium", "A correlated subquery:", ["runs once only", "references outer query columns and can run per outer row", "cannot use WHERE", "is the same as UNION"], 1),
    mcq("sq-r3", "Subqueries", "SQL", "Medium", "Employees above company average salary:", ["WHERE salary > AVG(salary)", "WHERE salary > (SELECT AVG(salary) FROM employees)", "HAVING salary without group", "JOIN AVG"], 1),
    mcq("sq-r4", "Subqueries", "SQL", "Easy", "EXISTS (SELECT 1 FROM ... WHERE ...) is true when:", ["the subquery returns at least one row", "the subquery returns NULL", "always", "never with JOIN"], 0),
    mcq("sq-r5", "Subqueries", "SQL", "Hard", "A scalar subquery in SELECT must:", ["return at most one row and one column", "return many rows", "use GROUP BY always", "be correlated always"], 0),
  ],
};

export function getReassessmentQuestions(topic) {
  return reassessmentBanks[topic] ?? [];
}
