var partition = function(s) {
    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
        }
    }
    const ans = [], t = [];
    const dfs = (i) => {
        if (i === n) {
            ans.push(t.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (f[i][j]) {
                t.push(s.slice(i, j + 1));
                dfs(j + 1);
                t.pop();
            }
        }
    };
    dfs(0);
    return ans;
};
