// Q-33 in leetcode

var search = function(nums, target) {
    let [low, high] = [0, nums.length-1];
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(nums[mid] === target) return mid;
        if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]) high = mid-1;
            else low = mid+1;
        } else {
            if(nums[mid] <= target && target <= nums[high]) low = mid+1;
            else high = mid-1;
        }
    }
    return -1;
  };
  
  var nums = [4, 5, 6, 7, 0, 1, 2];
  var target = 0;
  var result = search(nums, target);
  console.log("Search Result:", result);
  