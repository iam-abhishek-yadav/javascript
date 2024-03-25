var criticalConnections = function(n, connections) {
    let now = 0;
    const g = Array(n)
        .fill(0)
        .map(() => []);
    const dfn = Array(n).fill(0);
    const low = Array(n).fill(0);
    
    for (const [a, b] of connections) {
        g[a].push(b);
        g[b].push(a);
    }
    
    const ans = [];
    
    const tarjan = (a, fa) => {
        dfn[a] = low[a] = ++now;
        for (const b of g[a]) {
            if (b === fa) {
                continue;
            }
            if (!dfn[b]) {
                tarjan(b, a);
                low[a] = Math.min(low[a], low[b]);
                if (low[b] > dfn[a]) {
                    ans.push([a, b]);
                }
            } else {
                low[a] = Math.min(low[a], dfn[b]);
            }
        }
    };
    
    tarjan(0, -1);
    return ans;
};
