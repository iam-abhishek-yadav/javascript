var longestOnes = function(nums, k) {
    let [left, right, max, zero] = [0, 0, 0, 0];
    while(right < nums.length){
        if(nums[right] === 0) zero++;
        while(zero > k){
            if(nums[left] === 0) zero--;
            left++;
        }
        max = Math.max(max, right-left+1);
        right++;
    }
    return max;
};
