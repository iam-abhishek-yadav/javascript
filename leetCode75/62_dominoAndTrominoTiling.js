var numTilings = function(n) {
    let f = [1, 0, 0, 0];
    const mod = 1000000007;

    for (let i = 1; i <= n; ++i) {
        const g = new Array(4);
        g[0] = (f[0] + f[1] + f[2] + f[3]) % mod;
        g[1] = (f[2] + f[3]) % mod;
        g[2] = (f[1] + f[3]) % mod;
        g[3] = f[0];

        f = g;
    }

    return (f[0] % mod + mod) % mod;
};
