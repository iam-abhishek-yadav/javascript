// Example 1: Functions as Arguments

// Higher-order function that takes a function as an argument
function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
}

// Greeting functions
function sayHello(name) {
    return "Hello, " + name + "!";
}

function sayGoodbye(name) {
    return "Goodbye, " + name + "!";
}

// Using the higher-order function with different greeting functions
greet("John", sayHello);
greet("Jane", sayGoodbye);

// Example 2: Functions that Return Functions

// Higher-order function that returns a function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

// Creating specialized functions using the multiplier function
const double = multiplier(2);
const triple = multiplier(3);

console.log("Double of 5:", double(5)); // Output: 10
console.log("Triple of 5:", triple(5)); // Output: 15

// Example 3: Functions Passed to Array Methods

const numbers = [1, 2, 3, 4, 5];

// Using the map higher-order function
const squaredNumbers = numbers.map(function (num) {
    return num * num;
});

console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 4: Functions Passed to setTimeout

// Higher-order function that takes a function and a delay as arguments
function delayedExecution(callback, delay) {
    setTimeout(callback, delay);
}

// Using the delayedExecution function
delayedExecution(function () {
    console.log("Delayed execution after 2000 milliseconds");
}, 2000);

// Example 5: Functions Passed to Promises

const myPromise = new Promise(function (resolve, reject) {
    // Simulating asynchronous code
    const success = true;

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Using the then and catch methods with functions
myPromise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error(error);
    });