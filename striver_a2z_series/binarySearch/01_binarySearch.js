var search = function(nums, target) {
    let [left, right] = [0, nums.length-1];
    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[mid] === target) return mid;
        if(target > nums[mid]) left = mid+1;
        else right = mid-1;
    }
    return -1;
};
