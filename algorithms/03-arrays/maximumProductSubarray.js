// Q-152 in leetcode

var maxProduct = function(nums) {
    let prefix = 1, suffix = 1, ans = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
  
        prefix *= nums[i];
        suffix *= nums[nums.length - i - 1];
  
        ans = Math.max(ans, Math.max(prefix, suffix));
    }
    return ans;
  };
  
  // Example usage
  var nums = [2, 3, -2, 4, -1];
  var result = maxProduct(nums);
  console.log("Maximum product of a subarray:", result);
  