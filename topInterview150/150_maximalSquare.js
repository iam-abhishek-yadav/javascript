var maximalSquare = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxSquare = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === '1') {
                dp[i + 1][j + 1] = Math.min(
                    Math.min(dp[i][j + 1], dp[i + 1][j]),
                    dp[i][j]
                ) + 1;
                maxSquare = Math.max(maxSquare, dp[i + 1][j + 1]);
            }
        }
    }
    return maxSquare * maxSquare;
};

