var maxSubArray = function(nums) {
    let [curr, max] = [0, -Infinity];
    for(const num of nums){
        curr = curr + num < num ? num : curr + num;
        max = Math.max(max, curr);
    }
    return max;
};
