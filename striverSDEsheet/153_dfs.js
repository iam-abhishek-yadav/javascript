class Solution {
    dfsOfGraph(V, adj) {
        const visited = new Array(V).fill(false), dfsTraversal = [];
        const dfs = (node) => {
            visited[node] = true;
            dfsTraversal.push(node);
            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        };
        dfs(0);
        return dfsTraversal;
    }
}
