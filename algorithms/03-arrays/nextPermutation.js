// Q-31 in leetcode

var nextPermutation = function(nums) {
    const reverse = (nums, start, end) => {
        while (start < end) [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
  
    let index = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }
  
    if (index === -1) reverse(nums, 0, nums.length - 1);
    else {
        for (let i = nums.length - 1; i >= index; i--) {
            if (nums[i] > nums[index]) {
                [nums[index], nums[i]] = [nums[i], nums[index]];
                break;
            }
        }
        reverse(nums, index + 1, nums.length - 1);
    }
  };
  
  let nums = [1, 2, 3];
  console.log("Original Array:", nums);
  
  nextPermutation(nums);
  console.log("Next Permutation:", nums);
  