var missingNumber = function(nums) {
    let xor = 0, i;
    for(i=0;i<nums.length;i++){
        xor ^= nums[i];
        xor ^= i;
    }
    xor ^= i;
    return xor;
};
