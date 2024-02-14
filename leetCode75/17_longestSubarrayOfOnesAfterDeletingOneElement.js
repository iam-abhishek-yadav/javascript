var longestSubarray = function(nums) {
    let [left, right, max, zero] = [0, 0, 0, 0];
    while(right < nums.length){
        if(nums[right] === 0) zero++;
        while(zero > 1){
            if(nums[left] === 0) zero--;
            left++;
        }
        max = Math.max(max, right-left);
        right++;
    }
    return max;
};
