var search = function(nums, target) {
    let [left, right] = [0, nums.length-1];
    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[mid] === target) return mid;
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]) right = mid;
            else left = mid+1;
        } else {
            if(nums[mid] <= target && target <= nums[right]) left = mid;
            else right = mid-1;
        }
    }
    return -1;
};
