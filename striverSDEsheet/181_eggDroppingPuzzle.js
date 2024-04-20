class Solution {
    solve(e, f, dp) {
        if (f === 0 || f === 1) return 1;
        if (e === 1) return f;
        if (dp[e][f] !== -1) return dp[e][f];
        let min = Infinity;
        for (let i = 1; i <= f; i++) {
            let temp = 1 + Math.max(this.solve(e - 1, i - 1, dp), this.solve(e, f - i, dp));
            min = Math.min(min, temp);
        }
        return dp[e][f] = min;
    }
    eggDrop(n, k) {
        const dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(-1));
        return this.solve(n, k, dp);
    }
}
