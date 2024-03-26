function subsetSumToK(n, k, arr) {
    let dp = new Array(n).fill(null).map(() => new Array(k + 1).fill(null));
    return helper(0, k, arr, dp);
}

function helper(i, k, arr, dp) {
    if (k === 0) return true;
    if (i === arr.length || k < 0) return false;
    if (dp[i][k] !== null) return dp[i][k];
    return dp[i][k] = helper(i + 1, k, arr, dp) || helper(i + 1, k - arr[i], arr, dp);
}

