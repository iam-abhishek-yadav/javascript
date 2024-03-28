var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    let max = 1;

    for (let i = 1; i < nums.length; i++)
        for (let j = 0; j < i; j++)
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1)
                dp[i] = dp[j] + 1;

    return Math.max(...dp);
};
