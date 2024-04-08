// Currying is a functional programming concept where a function with multiple arguments is transformed into a sequence of functions,
// each taking a single argument. This allows for partial application of the function, meaning that you can fix a number of arguments upfront
// and obtain a new function that accepts the remaining arguments.

// Example:

// Original function
function add(a, b) {
    return a + b;
}

// Curried version of the function
function add(a) {
    return function(b) {
        return a + b;
    };
}

// Now, we can use the curried function to create specialized versions with certain arguments pre-filled

const add2 = add(2); // Returns a function that adds 2 to its argument
console.log(add2(3)); // Outputs 5 (2 + 3)

// In this example, `add(2)` returns a function that takes a single argument `b` and adds `2` to it.
// This allows for partial application of the `add` function. We first fix one of the arguments (`2` in this case)
// and obtain a new function (`add2`) that only requires the second argument (`b`) to produce the final result.

// Currying promotes code reusability, improves readability, and enables the creation of more flexible and composable functions.
// It aligns well with functional programming principles and patterns.
