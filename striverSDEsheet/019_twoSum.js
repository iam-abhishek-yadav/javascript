var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const rem = target-nums[i];
        if(map.has(rem)){
            return [map.get(rem), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
