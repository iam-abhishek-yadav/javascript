var moveZeroes = function(nums) {
    let [left, right] = [0, 0];
    while(right < nums.length){
        if(nums[right] != 0){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return nums;
};
