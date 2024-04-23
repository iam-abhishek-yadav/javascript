var numDecodings = function(s) {
    const n = s.length, dp = new Array(n + 1).fill(0);
    dp[0] = 1, dp[1] = s[0] === '0' ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        const a = parseInt(s[i - 1]), b = parseInt(s.substring(i - 2, i));
        if (a >= 1) dp[i] += dp[i - 1];
        if (b >= 10 && b <= 26) dp[i] += dp[i - 2];
    }

    return dp[n];
};
