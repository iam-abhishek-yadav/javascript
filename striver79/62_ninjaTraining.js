function ninjaTraining(n, points) {
    let dp = new Array(n + 1).fill(0).map(() => new Array(3).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 3; j++) {
            for (let col = 0; col < 3; col++) {
                if (col !== j) {
                    let merit = points[i - 1][col] + dp[i - 1][col];
                    dp[i][j] = Math.max(dp[i][j], merit);
                }
            }
        }
    }

    let max = 0;

    for (let j = 0; j < 3; j++) {
        max = Math.max(max, dp[n][j]);
    }

    return max;
}

