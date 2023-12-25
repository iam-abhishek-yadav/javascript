// Q-1 in leetcode
var twoSum = function(nums, target) {
    const numIndicesMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndicesMap.has(complement)) {
            return [numIndicesMap.get(complement), i];
        }

        numIndicesMap.set(nums[i], i);
    }

    return [];
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] or [1, 0]
