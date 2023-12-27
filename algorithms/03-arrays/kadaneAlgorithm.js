// Q-53 in leetcode
var maxSubArray = function(nums) {
    let [max, curr] = [-Infinity, 0];

    for (let num of nums) {
        curr = curr < 0 ? num : curr + num;
        max = Math.max(max, curr);
    }

    return max;
};

const numsExample = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const resultExample = maxSubArray(numsExample);
console.log("Maximum Subarray Sum:", resultExample);
