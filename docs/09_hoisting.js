// Example 1: Variable Declaration Hoisting with var

console.log(hoistedVar); // Outputs 'undefined' (var declarations are hoisted)
var hoistedVar = "I am hoisted";

// Example 2: Function Declaration Hoisting

hoistedFunction(); // Outputs 'I am a hoisted function' (function declarations are hoisted)

function hoistedFunction() {
    console.log("I am a hoisted function");
}

// Example 3: Hoisting Behavior with let and const

// console.log(hoistedLet); // Uncommenting this line would result in an error (let is not hoisted)
// let hoistedLet = "I am not hoisted";

// console.log(hoistedConst); // Uncommenting this line would result in an error (const is not hoisted)
// const hoistedConst = "I am not hoisted";

// Example 4: Function Expression and Hoisting

// console.log(nonHoistedFunction()); // Uncommenting this line would result in an error (function expression is not hoisted)

var nonHoistedFunction = function () {
    return "I am a non-hoisted function expression";
};

// Note: While the variable declaration is hoisted, the assignment (function expression) is not.

// Example 5: Variable Shadowing

var shadowedVar = "I am a global variable";

function shadowingExample() {
    console.log(shadowedVar); // Outputs 'undefined' (local variable shadows the global variable)
    var shadowedVar = "I am a local variable";
    console.log(shadowedVar); // Outputs 'I am a local variable'
}

shadowingExample();

// Note: Variable declarations are hoisted to the top of their scope, but the assignment remains in place.

// Example 6: Hoisting with Functions in Block Scope (ES6)

if (true) {
    console.log(blockScopedFunction()); // Outputs 'I am a block-scoped function' (function declarations in block scope are hoisted)

    function blockScopedFunction() {
        return "I am a block-scoped function";
    }
}

// Note: Hoisting behavior for functions declared with 'function' keyword in block scope is specific to ES6 and later.
