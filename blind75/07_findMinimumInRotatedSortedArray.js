var findMin = function(nums) {
    let [low, high, min] = [0, nums.length-1, Infinity];
    while(low <= high){
        const mid = (low + high) >> 1;
        if(nums[low] <= nums[high]) return Math.min(min, nums[low]);
        if(nums[low] <= nums[mid]) {
            min = nums[low];
            low = mid+1;
        } else {
            min = nums[mid];
            high = mid-1;
        }
    }
    return min;
};
