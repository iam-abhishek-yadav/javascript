var search = function(nums, target) {
    let [low, high] = [0, nums.length-1];
    while(low <= high){
        const mid = (low + high) >> 1;
        if(nums[mid] === target) return true;
        if(nums[mid] === nums[low] && nums[mid] === nums[high]){
            low++;
            high--;
        } else if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if(nums[mid] <= target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return false;
};
