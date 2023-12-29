const getLongestZeroSumSubarrayLength = function (arr) {
    let maxLength = 0;
    let sum = 0;
    const sumIndexMap = new Map();
    sumIndexMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sumIndexMap.has(sum)) {
            maxLength = Math.max(maxLength, i - sumIndexMap.get(sum));
        } else {
            sumIndexMap.set(sum, i);
        }
    }

    return maxLength;
};

const arr = [4, 2, -3, 1, 6];
const result = getLongestZeroSumSubarrayLength(arr);
console.log("Length of the longest subarray with zero sum:", result);
