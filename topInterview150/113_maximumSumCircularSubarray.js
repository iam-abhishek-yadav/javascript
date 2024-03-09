var maxSubarraySumCircular = function(nums) {
    const kadane = (nums) => {
        let max = nums[0], curr = nums[0];

        for (let i = 1; i < nums.length; i++) {
            curr = Math.max(nums[i], curr + nums[i]);
            max = Math.max(max, curr);
        }

        return max;
    }

    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const nonCircularMax = kadane(nums);
    const invertedNums = nums.map(num => -num);
    const circularMax = totalSum + kadane(invertedNums);

    return circularMax > nonCircularMax && circularMax !== 0 ? circularMax : nonCircularMax;

};
