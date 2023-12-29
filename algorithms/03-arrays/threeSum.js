// Q-15 in leetcode

var threeSum = function(nums) {
    var result = [];
  
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i !== 0 && nums[i - 1] === nums[i]) continue;
  
        let [j, k] = [i + 1, nums.length - 1];
  
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
  
            if (sum === 0) {
                var temp = [nums[i], nums[j], nums[k]];
                result.push(temp);
  
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
  
    return result;
  };
  
  var nums = [-1, 0, 1, 2, -1, -4];
  var result = threeSum(nums);
  console.log("Unique triplets that sum to zero:");
  console.log(result);
  