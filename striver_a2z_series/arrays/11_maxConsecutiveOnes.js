var findMaxConsecutiveOnes = function(nums) {
    let [curr, max] = [0, 0];
    for(const num of nums){
        curr = num === 0 ? 0 : curr + 1;
        max = Math.max(max, curr);
    }
    return max;
};
