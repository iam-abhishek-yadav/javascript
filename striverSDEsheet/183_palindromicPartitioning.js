class Solution {
    palindromicPartition(str) {
        if (str.length === 1) return 0;
        const n = str.length;
        const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

        function isPalindrome(l, r) {
            while (l < r) {
                if (str.charAt(l) !== str.charAt(r)) return false;
                l++;
                r--;
            }
            return true;
        }

        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;
                if (isPalindrome(i, j)) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = Infinity;
                    for (let k = i; k < j; k++) {
                        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + 1);
                    }
                }
            }
        }

        return dp[0][n - 1];
    }
}
