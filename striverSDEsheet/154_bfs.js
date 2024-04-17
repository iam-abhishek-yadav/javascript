class Solution {
    bfsOfGraph(V, adj) {
        const visited = new Array(V).fill(false);
        const bfsTraversal = [];
        const queue = [];

        visited[0] = true;
        queue.push(0);

        while (queue.length !== 0) {
            const node = queue.shift();
            bfsTraversal.push(node);

            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }

        return bfsTraversal;
    }
}

