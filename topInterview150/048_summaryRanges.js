var summaryRanges = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
        }
        let end = nums[i];
        result.push(start === end ? start.toString() : `${start}->${end}`);
    }
    return result;
};
