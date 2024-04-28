function getLongestSubarray(nums, k) {
    let map = new Map();
    map.set(0, -1);
    let sum = 0,
        max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) max = Math.max(max, i - map.get(sum - k));
        if (!map.has(sum)) map.set(sum, i);
    }
    
    return max;
}

