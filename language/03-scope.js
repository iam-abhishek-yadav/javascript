// Global Scope Example
const globalVariable = "I am a global variable";

function globalScopeFunction() {
    console.log("Inside global scope function:");
    console.log(globalVariable); // Accessing global variable
}

globalScopeFunction();
console.log("Outside global scope function:");
console.log(globalVariable); // Accessing global variable

// Function Scope Example
function functionScopeExample() {
    const functionVariable = "I am a function variable";
    console.log("\nInside functionScopeExample function:");
    console.log(functionVariable); // Accessing function variable

    // Nested Function Scope Example
    function nestedFunction() {
        const nestedVariable = "I am a nested variable";
        console.log("Inside nestedFunction:");
        console.log(nestedVariable); // Accessing nested variable
        console.log(functionVariable); // Accessing function variable
    }

    nestedFunction();
    // console.log(nestedVariable); // Uncommenting this line would result in an error
}

functionScopeExample();
// console.log(functionVariable); // Uncommenting this line would result in an error

// Block Scope Example (Introduced in ES6 with let and const)
if (true) {
    const blockVariable = "I am a block variable";
    console.log("\nInside block scope:");
    console.log(blockVariable); // Accessing block variable

    // Variables declared with var have function scope even inside blocks
    var oldVarVariable = "I am an old var variable";
}

// console.log(blockVariable); // Uncommenting this line would result in an error
console.log(oldVarVariable); // Accessing var variable outside the block

// Lexical Scope Example
function outerFunction() {
    const outerVariable = "I am an outer variable";

    function innerFunction() {
        console.log("\nInside innerFunction:");
        console.log(outerVariable); // Accessing outer variable from the lexical scope
    }

    innerFunction();
}

outerFunction();
// console.log(outerVariable); // Uncommenting this line would result in an error
