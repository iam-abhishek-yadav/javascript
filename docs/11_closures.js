// A closure is the combination of a function and the lexical environment within which that function was declared.
// It allows a function to maintain access to variables from its outer scope even after the outer function has completed execution.

// Lexical Scope: JavaScript uses lexical scoping, meaning that the scope of variables is determined by their location within the code.
// Closures capture and retain references to variables from their lexical scope.

// Access to Outer Variables: Closures have access to variables declared in their containing function, as well as variables declared in any parent functions.

// Lifetime: Closures retain their lexical environment even after the outer function has finished executing.
// This allows them to "remember" the values of variables from their enclosing scope.

// Use Cases

// Encapsulation: Closures are often used to create private variables and functions in JavaScript,
// encapsulating data within a function's scope and preventing outside access.

// Callbacks and Event Handlers: Closures are frequently used in asynchronous JavaScript programming,
// such as callbacks and event handlers, to maintain access to relevant variables even after the outer function has completed.

// Module Pattern: Closures are central to the module pattern in JavaScript,
// allowing for the creation of encapsulated modules with private and public methods.

// Benefits

// Data Privacy: Closures provide a way to achieve data encapsulation and privacy in JavaScript,
// allowing variables to be accessed only within the scope of a specific function.

// Memory Efficiency: Closures enable functions to retain access to variables from their lexical scope,
// preventing unnecessary duplication of data and improving memory efficiency.

// Flexible and Powerful: Closures are a versatile feature of JavaScript that enables advanced programming techniques
// such as currying, memoization, and partial application.

// Example

function outerFunction() {
    let outerVariable = 'I am outer';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from outerFunction's scope
    }

    return innerFunction;
}

const closureExample = outerFunction(); // closureExample is now a closure

closureExample(); // Outputs 'I am outer'

