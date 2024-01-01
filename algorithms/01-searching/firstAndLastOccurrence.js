// Q-34 in leetcode

var searchRange = function(nums, target) {
    var ans = [-1, -1];
    var low = 0, high = nums.length - 1;
  
    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid] == target || nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    ans[0] = (low < nums.length && nums[low] == target) ? low : -1;
  
    low = 0;
    high = nums.length - 1;
  
    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid] == target || nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    ans[1] = (high >= 0 && nums[high] == target) ? high : -1;
  
    return ans;
  };
  
  var nums = [5, 7, 7, 8, 8, 10];
  var target = 8;
  var result = searchRange(nums, target);
  console.log("Result:", result);
  