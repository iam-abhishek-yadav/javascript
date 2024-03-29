var repeatedStringMatch = function(a, b) {
    const m = a.length, n = b.length;
    let ans = Math.ceil(n / m);
    let t = a.repeat(ans);
    for (let i = 0; i < 3; i++) {
        if (t.includes(b)) {
            return ans;
        }
        ans++;
        t += a;
    }
    return -1;
};
