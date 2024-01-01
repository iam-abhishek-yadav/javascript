// Q-81 in leetcode

var search = function(nums, target) {
    let low = 0, high = nums.length-1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] === target) return true
        if(nums[mid] === nums[low] && nums[mid] === nums[high]){
            low = low+1
            high = high-1
        }
        else if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]) high = mid-1
            else low = mid+1
        } else {
            if(nums[mid] <= target && target <= nums[high]) low = mid+1
            else high = mid-1
        }
    }
    return false
};

var nums = [2,5,6,0,0,1,2]
var target = 0;
var result = search(nums, target);
console.log("Search Result:", result);
