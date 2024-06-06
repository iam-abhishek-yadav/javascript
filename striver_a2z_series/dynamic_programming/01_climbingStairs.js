var climbStairs = function(n) {
    if(n <= 2) return n;
    const dp = new Array(n+1);
    [dp[1], dp[2]] = [1, 2];
    for(let i=3;i<=n;i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
};
