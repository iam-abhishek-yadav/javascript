// Q-283 in leetcode

const array = [1, 2, 0, 0, 2, 3];

const moveZeroesToEnd = function(nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) [nums[i], nums[left++]] = [nums[left], nums[i]];
    }
    return nums;
};

console.log(moveZeroesToEnd(array));
