// Array Methods

// 1. filter
// - `filter` method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4]

// 2. find
// - `find` method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // Output: 4

// 3. map
// - `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 4. forEach
// - `forEach` method executes a provided function once for each array element.
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10

// 5. reduce
// - `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// 6. findIndex
// - `findIndex` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.
const index = numbers.findIndex(num => num === 3);
console.log(index); // Output: 2

// 7. some
// - `some` method tests whether at least one element in the array passes the test implemented by the provided function.
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

// 8. every
// - `every` method tests whether all elements in the array pass the test implemented by the provided function.
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers); // Output: false

