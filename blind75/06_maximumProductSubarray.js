var maxProduct = function(nums) {
    let [prefix, suffix, ans] = [1, 1, -Infinity];
    for(let i=0;i<nums.length;i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
        prefix *= nums[i];
        suffix *= nums[nums.length-i-1];
        ans = Math.max(ans, Math.max(prefix, suffix));
    }
    return ans;
};
