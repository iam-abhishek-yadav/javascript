function maxMinWindow(a, n) {
    let s = [];
    let ans = new Array(n).fill(Number.MIN_VALUE);
    let prev = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (s.length > 0 && a[s[s.length - 1]] > a[i]) {
            let ind = s.pop();
            let len = i - prev[ind] - 1;
            ans[len - 1] = Math.max(ans[len - 1], a[ind]);
        }
        prev[i] = s.length === 0 ? -1 : s[s.length - 1];
        s.push(i);
    }

    while (s.length > 0) {
        let ind = s.pop();
        let len = n - prev[ind] - 1;
        ans[len - 1] = Math.max(ans[len - 1], a[ind]);
    }

    for (let i = n - 2; i >= 0; i--) {
        ans[i] = Math.max(ans[i], ans[i + 1]);
    }

    return ans;
}

