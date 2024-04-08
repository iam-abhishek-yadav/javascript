// Pure Functions:
// - A pure function is a function that always produces the same output for the same input and has no side effects.
// - It does not depend on any external state or mutable data and does not modify state outside its scope.
// - Pure functions are deterministic, meaning that given the same input, they will always return the same output.
// - They are easy to reason about and test since their behavior is predictable.

// Example of a pure function:
function add(a, b) {
    return a + b;
}

// Side Effects:
// - Side effects occur when a function modifies state outside its scope or interacts with external resources such as I/O operations, DOM manipulation, or network requests.
// - Side effects make code harder to understand, test, and maintain because they introduce hidden dependencies and unexpected behavior.
// - It's important to minimize side effects and isolate them within specific parts of the codebase to improve modularity and predictability.

// Example of a function with side effects:
let result = 0; // External state

function addToResult(value) {
    result += value; // Modifying external state
}

// In the above example, the `addToResult` function modifies the external `result` variable, which is a side effect.
