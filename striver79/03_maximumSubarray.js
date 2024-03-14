var maxSubArray = function(nums) {
    let [curr, max] = [0, -Infinity];
    for(const num of nums){
        curr = Math.max(curr + num, num);
        max = Math.max(max, curr);
    }
    return max;
};
