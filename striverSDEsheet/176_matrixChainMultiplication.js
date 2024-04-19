class Solution {
    
    matrixMultiplication(arr, n)
    {
        const dp = new Array(n).fill(null).map(()=> Array(n).fill(Number.MAX_SAFE_INTEGER));
    
        for(let i=1; i<n; i++)
            dp[i][i] = 0;
        
        for(let len=2; len<=n-1; len++) {
            for(let start = 1; start<=n-len; start++) {
                const end = start+len - 1;
                for(let k = start+1; k<=end; k++) {
                    const sum = dp[start][k-1] + dp[k][end] + arr[start-1]*arr[k-1]*arr[end];
                    dp[start][end] = Math.min(dp[start][end], sum);
                }
            }
        }
        
        
        return dp[1][n-1];
    }
}
