var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0;
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    dp[0][0] = 1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j] === 1 || (i === 0 && j === 0)) continue;
            dp[i][j] = (i > 0 ? dp[i-1][j] : 0) + (j > 0 ? dp[i][j-1] : 0);
        }
    }
    return dp[m-1][n-1];
};
