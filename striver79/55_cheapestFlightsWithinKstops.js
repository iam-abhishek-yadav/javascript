var findCheapestPrice = function(n, flights, src, dst, k) {
    const INF = 0x3f3f3f3f;
    let dist = new Array(n).fill(INF);
    let backup = new Array(n);

    dist[src] = 0;

    for (let i = 0; i < k + 1; ++i) {
        backup = [...dist];
        for (let e of flights) {
            let f = e[0], t = e[1], p = e[2];
            dist[t] = Math.min(dist[t], backup[f] + p);
        }
    }

    return dist[dst] === INF ? -1 : dist[dst];
};
