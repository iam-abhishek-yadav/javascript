var findPeakElement = function(nums) {
    let [n, left, right] = [nums.length, 1, nums.length-2];
    if(n === 1 || nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;
    while(left <= right){
        let mid = (left + right) >> 1;
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid;
        if(nums[mid] > nums[mid-1]) left = mid+1;
        else right = mid-1;
    }
    return -1;
};
