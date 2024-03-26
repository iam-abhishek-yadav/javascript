function knapsack(weight, value, n, maxWeight) {
    let dp = new Array(n).fill(0).map(() => new Array(maxWeight + 1).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < maxWeight + 1; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = weight[0]; i <= maxWeight; i++) {
        dp[0][i] = value[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= maxWeight; j++) {
            let nontake = dp[i - 1][j];
            let take = Number.MIN_SAFE_INTEGER;
            if (j >= weight[i]) {
                take = value[i] + dp[i - 1][j - weight[i]];
            }
            dp[i][j] = Math.max(take, nontake);
        }
    }

    return dp[n - 1][maxWeight];
}

