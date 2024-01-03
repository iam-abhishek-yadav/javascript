// Q-1283 in leetcode

var smallestDivisor = function(nums, threshold) {
    let low = 0, high = Math.max(...nums);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let sumRoundedDivisions = nums.reduce((total, num) => total + Math.ceil(num / mid), 0);

        if (sumRoundedDivisions <= threshold) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

const numsExample = [1, 2, 5, 9];
const thresholdExample = 6;

const resultExample = smallestDivisor(numsExample, thresholdExample);

console.log(`The smallest divisor to meet the threshold is: ${resultExample}`);
