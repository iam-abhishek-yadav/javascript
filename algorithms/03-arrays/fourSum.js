// Q-18 in leetcode

var fourSum = function(nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 3; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
  
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
  
            let [k, l] = [j + 1, nums.length - 1];
  
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
  
                if (sum === target) {
                    const temp = [nums[i], nums[j], nums[k], nums[l]];
                    res.push(temp);
                    k++;
                    l--;
  
                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
  
    return res;
  };
  
  
  var nums = [1, 0, -1, 0, -2, 2];
  var target = 0;
  var result = fourSum(nums, target);
  console.log("Quadruplets that sum to", target, ":");
  console.log(result);
  