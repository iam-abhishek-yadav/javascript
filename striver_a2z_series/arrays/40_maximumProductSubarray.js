var maxProduct = function(nums) {
    let [prefix, suffix, max] = [1, 1, -Infinity];
    for(let i=0;i<nums.length;i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
        prefix *= nums[i];
        suffix *= nums[nums.length-i-1];
        max = Math.max(max, Math.max(prefix, suffix));
    }
    return max;
};
