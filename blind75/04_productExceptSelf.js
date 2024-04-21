var productExceptSelf = function(nums) {
    const prefix = new Array(nums.length), suffix = new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        prefix[i] = i === 0 ? 1 : prefix[i-1]*nums[i-1];
        suffix[nums.length-i-1] = i === 0 ? 1 : suffix[nums.length-i]*nums[nums.length-i];
    }
    for(let i=0;i<nums.length;i++){
        nums[i] = prefix[i] * suffix[i];
    }
    return nums;
};
