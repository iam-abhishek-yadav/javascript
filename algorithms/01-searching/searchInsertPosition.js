// Q-35 in leetcode

var searchInsert = function(nums, target) {
    let [low, high, ans] = [0, nums.length - 1, nums.length];
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
  };
  
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result);
  