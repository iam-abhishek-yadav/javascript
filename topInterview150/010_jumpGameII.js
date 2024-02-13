var jump = function(nums) {
    let jumps = 0;
    let maxReach = 0;
    let currReach = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);

        if (i === currReach) {
            currReach = maxReach;
            jumps++;
        }
    }

    return jumps;
};
