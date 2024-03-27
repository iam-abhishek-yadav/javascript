var maxProfit = function(k, prices) {
    const dp = Array.from({ length: k + 1 }, () => Array.from({ length: 2 }, () => 0));
    for (let j = 1; j <= k; ++j) dp[j][1] = -prices[0];
    for (const price of prices.slice(1)) {
        for (let j = k; j; --j) {
            dp[j][0] = Math.max(dp[j][1] + price, dp[j][0]);
            dp[j][1] = Math.max(dp[j - 1][0] - price, dp[j][1]);
        }
    }
    return dp[k][0];
};
