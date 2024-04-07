var getPermutation = function(n, k) {
    let ans = '';
    const vis = new Array(n + 1).fill(false);
    for (let i = 0; i < n; ++i) {
        let fact = 1;
        for (let j = 1; j < n - i; ++j) fact *= j;
        for (let j = 1; j <= n; ++j) {
            if (!vis[j]) {
                if (k > fact) k -= fact;
                else {
                    ans += j;
                    vis[j] = true;
                    break;
                }
            }
        }
    }
    return ans;
};
