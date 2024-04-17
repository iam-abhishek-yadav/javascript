class Solution {
    topoSort(V, adj) {
        const inDegree = new Array(V).fill(0);
        const result = [];

        for (let u = 0; u < V; u++) {
            for (let v of adj[u]) {
                inDegree[v]++;
            }
        }

        const queue = [];
        for (let i = 0; i < V; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        while (queue.length > 0) {
            const u = queue.shift();
            result.push(u);

            for (let v of adj[u]) {
                if (--inDegree[v] === 0) {
                    queue.push(v);
                }
            }
        }

        return result;
    }
}
