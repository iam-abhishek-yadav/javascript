var maxCoins = function(nums) {
    const balloons = [1, ...nums, 1], n = balloons.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    for (let len = 2; len < n; len++) {
        for (let left = 0; left < n - len; left++) {
            const right = left + len;
            for (let burst = left + 1; burst < right; burst++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    balloons[left] * balloons[burst] * balloons[right] +
                        dp[left][burst] + dp[burst][right]
                );
            }
        }
    }
    return dp[0][n - 1];
};
