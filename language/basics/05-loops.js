// Example 1: for loop
console.log("Example 1: for loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log();

// Example 2: while loop
console.log("Example 2: while loop");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
console.log();

// Example 3: do-while loop
console.log("Example 3: do-while loop");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
console.log();

// Example 4: Nested loops
console.log("Example 4: Nested loops");
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(row + "," + col);
    }
}
console.log();

// Example 5: for...of loop (iterating over elements in an iterable)
console.log("Example 5: for...of loop");
const iterableArray = [1, 2, 3, 4, 5];
for (const element of iterableArray) {
    console.log(element);
}
console.log();

// Example 6: for...in loop (iterating over properties in an object)
console.log("Example 6: for...in loop");
const sampleObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
for (const key in sampleObject) {
    console.log(key + ": " + sampleObject[key]);
}
console.log();

// Example 7: forEach loop (array method)
console.log("Example 7: forEach loop");
const arrayForForEach = [1, 2, 3, 4, 5];
arrayForForEach.forEach(element => {
    console.log(element);
});
console.log();