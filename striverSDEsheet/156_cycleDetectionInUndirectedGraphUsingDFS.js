class Solution {
    static hasCycleDFS(adjList, visited, node, parent) {
        visited[node] = true;

        for (let neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                if (Solution.hasCycleDFS(adjList, visited, neighbor, node)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }

        return false;
    }

    static cycleDetection(edges, n, m) {
        let adjList = new Array(n + 1).fill(null).map(() => []);
        
        for (let edge of edges) {
            let [u, v] = edge;
            adjList[u].push(v);
            adjList[v].push(u);
        }

        let visited = new Array(n + 1).fill(false);

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                if (Solution.hasCycleDFS(adjList, visited, i, -1)) {
                    return "Yes";
                }
            }
        }

        return "No";
    }
}

