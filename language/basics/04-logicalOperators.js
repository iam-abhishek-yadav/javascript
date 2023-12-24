// Example 1: Logical AND (&&)
const condition1 = true;
const condition2 = 5 > 3;

const andResult = condition1 && condition2;
console.log("Logical AND Example:");
console.log(andResult); // Output: true (both conditions are true)
console.log();

// Example 2: Logical OR (||)
const condition3 = false;
const condition4 = 10 < 20;

const orResult = condition3 || condition4;
console.log("Logical OR Example:");
console.log(orResult); // Output: true (at least one condition is true)
console.log();

// Example 3: Logical NOT (!)
const condition5 = true;

const notResult = !condition5;
console.log("Logical NOT Example:");
console.log(notResult); // Output: false (negation of true is false)
console.log();

// Example 4: Combined logical operators
const combinedResult = (condition1 && condition2) || condition4;
console.log("Combined Logical Operators Example:");
console.log(combinedResult); // Output: true (true && true || true evaluates to true)
console.log();
