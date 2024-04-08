// Example 1: let and var in Function Scope

function functionScopeExample() {
    if (true) {
        var functionVar = "I am a function-scoped variable (var)";
        let functionLet = "I am a block-scoped variable (let)";

        console.log("Inside if block:");
        console.log(functionVar); // Accessing function-scoped variable
        console.log(functionLet); // Accessing block-scoped variable
    }

    console.log("Outside if block:");
    console.log(functionVar); // Accessing function-scoped variable outside the block
    // console.log(functionLet); // Uncommenting this line would result in an error
}

functionScopeExample();

// Example 2: let and const in Block Scope

if (true) {
    var blockVar = "I am a function-scoped variable (var) inside a block";
    let blockLet = "I am a block-scoped variable (let)";
    const blockConst = "I am a block-scoped constant (const)";

    console.log("\nInside block:");
    console.log(blockVar); // Accessing function-scoped variable inside the block
    console.log(blockLet); // Accessing block-scoped variable inside the block
    console.log(blockConst); // Accessing block-scoped constant inside the block
}

console.log("Outside block:");
console.log(blockVar); // Accessing function-scoped variable outside the block
// console.log(blockLet); // Uncommenting this line would result in an error
// console.log(blockConst); // Uncommenting this line would result in an error

// Example 3: const for Constants

const pi = 3.14159; // Constants are block-scoped
// pi = 3.14; // Uncommenting this line would result in an error (cannot reassign a constant)

console.log("\nValue of pi:", pi);

// Example 4: let for Mutable Variables

let counter = 0; // Mutable variables can be reassigned
counter += 1;

console.log("\nCounter value:", counter);
