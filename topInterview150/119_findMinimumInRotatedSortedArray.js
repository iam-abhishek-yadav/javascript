var findMin = function(nums) {
    let [left, right, min] = [0, nums.length-1, Infinity];
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[left] <= nums[right]) return Math.min(min, nums[left]);
        if(nums[left] <= nums[mid]){
            min = nums[left];
            left = mid+1;
        } else {
            min = nums[mid];
            right = mid-1;
        }
    }
    return min;
};
