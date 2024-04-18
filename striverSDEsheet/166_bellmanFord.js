class Solution {
    static bellman_ford(V, edges, S) {
        const distance = new Array(V).fill(Number.MAX_SAFE_INTEGER);
        distance[S] = 0;

        for (let start = 0; start < V - 1; start++) {
            for (let index = 0; index < edges.length; index++) {
                const edge = edges[index];
                const u = edge[0];
                const v = edge[1];
                const wt = edge[2];

                if (distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + wt < distance[v]) {
                    distance[v] = distance[u] + wt;
                }
            }
        }

        for (let index = 0; index < edges.length; index++) {
            const edge = edges[index];
            const u = edge[0];
            const v = edge[1];
            const wt = edge[2];

            if (distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + wt < distance[v]) {
                return [-1];
            }
        }

        return distance;
    }
}

