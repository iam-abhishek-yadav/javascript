function maxSumIS(arr, n) {
    let dp = new Array(n).fill(0);
    let ans = Number.MIN_SAFE_INTEGER;

    for (let idx = 0; idx < n; idx++) dp[idx] = arr[idx];

    for (let idx1 = 0; idx1 < n; idx1++) {
        for (let idx2 = 0; idx2 < idx1; idx2++) {
            if (arr[idx1] > arr[idx2]) {
                dp[idx1] = Math.max(dp[idx2] + arr[idx1], dp[idx1]);
            }
        }
        ans = Math.max(ans, dp[idx1]);
    }

    return ans;
}

