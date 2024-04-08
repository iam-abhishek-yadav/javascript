// Example 1: Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Example 2: Function Expression
const add = function (a, b) {
    return a + b;
};

// Example 3: Arrow Function
const multiply = (x, y) => x * y;

// Example 4: Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// Example 5: Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example 6: Function as a Parameter
function operate(a, b, operation) {
    return operation(a, b);
}

// Example 7: Callback Functions
function callbackExample(callback) {
    console.log("Executing some code before callback...");
    callback();
}

// Example 8: Higher-Order Functions
function multiplier(factor) {
    // A higher-order function that returns a function
    return function (number) {
        return number * factor;
    };
}

// Example 9: Recursive Function
function factorial(n) {
    // Recursive function to calculate factorial
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example 10: Immediately Invoked Function Expression (IIFE)
(function () {
    // An IIFE is a function that is immediately executed
    console.log("This is an IIFE!");
})();

// Calling functions and displaying output
greet("John");
console.log("Addition:", add(3, 5));
console.log("Multiplication:", multiply(4, 6));
console.log("Power:", power(2));
console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("Operate:", operate(8, 4, (a, b) => a / b));
callbackExample(() => console.log("Callback executed!"));
const double = multiplier(2);
console.log("Double of 7:", double(7));
console.log("Factorial of 5:", factorial(5));
