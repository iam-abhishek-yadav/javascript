// Example 1: Loose equality (==)
const looseEqual1 = 5 == "5"; // true
const looseEqual2 = true == 1; // true
const looseEqual3 = null == undefined; // true

console.log("Loose Equality Examples:");
console.log(looseEqual1); // Output: true
console.log(looseEqual2); // Output: true
console.log(looseEqual3); // Output: true
console.log();

// Example 2: Strict equality (===)
const strictEqual1 = 5 === "5"; // false
const strictEqual2 = true === 1; // false
const strictEqual3 = null === undefined; // false

console.log("Strict Equality Examples:");
console.log(strictEqual1); // Output: false
console.log(strictEqual2); // Output: false
console.log(strictEqual3); // Output: false
console.log();

// Example 3: Object equality
const obj1 = { key: "value" };
const obj2 = { key: "value" };

const referenceComparison1 = obj1 == obj2; // false (reference comparison)
const referenceComparison2 = obj1 === obj2; // false (reference comparison)

console.log("Object Equality Examples:");
console.log(referenceComparison1); // Output: false
console.log(referenceComparison2); // Output: false

// Two references to the same object
const obj3 = obj1;
const referenceComparison3 = obj1 === obj3; // true (reference comparison)

console.log(referenceComparison3); // Output: true

// Deep equality check function
function deepEqual(objA, objB) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

// Deep equality check example
const deepEqualCheck = deepEqual(obj1, obj2);
console.log("Deep Equality Check Example:");
console.log(deepEqualCheck); // Output: true (because they have the same key-value pairs)
