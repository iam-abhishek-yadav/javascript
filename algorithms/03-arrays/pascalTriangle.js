// Q-118 in leetcode

var generate = function(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }

        triangle.push(row);
    }

    return triangle;
};

// Example usage
const numRows = 5;
const result = generate(numRows);
console.log(`Pascal's Triangle with ${numRows} rows:`);
console.log(result);
