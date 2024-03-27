var longestPalindromeSubseq = function(s) {
    const n = s.length, dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; ++i) dp[i][i] = 1;
    for (let j = 1; j < n; ++j) {
        for (let i = j - 1; i >= 0; --i) {
            if (s.charAt(i) === s.charAt(j)) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};
