class Solution {
    dfs(u, adj, visited, stack) {
        visited[u] = true;

        for (let v of adj[u]) {
            if (!visited[v]) {
                this.dfs(v, adj, visited, stack);
            }
        }

        stack.push(u);
    }

    topoSort(V, adj) {
        const visited = new Array(V).fill(false);
        const stack = [];

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.dfs(i, adj, visited, stack);
            }
        }

        return stack.reverse();
    }
}
