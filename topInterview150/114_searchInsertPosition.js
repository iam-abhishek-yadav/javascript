var searchInsert = function(nums, target) {
    let [left, right, ans] = [0, nums.length-1, nums.length];
    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[mid] >= target){
            ans = mid;
            right = mid-1;
        } else left = mid+1;
    }
    return ans;
};
