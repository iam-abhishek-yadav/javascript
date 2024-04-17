class Solution {
    static hasCycleDFS(node, adjList, visited, recStack) {
        if (recStack[node]) {
            return true;
        }

        if (visited[node]) {
            return false;
        }

        visited[node] = true;
        recStack[node] = true;

        for (let neighbor of adjList[node]) {
            if (Solution.hasCycleDFS(neighbor, adjList, visited, recStack)) {
                return true;
            }
        }

        recStack[node] = false;
        return false;
    }

    static detectCycleInDirectedGraph(n, edges) {
        const adjList = Array.from({ length: n + 1 }, () => []);
        for (let edge of edges) {
            const [u, v] = edge;
            adjList[u].push(v);
        }

        const visited = new Array(n + 1).fill(false);
        const recStack = new Array(n + 1).fill(false);

        for (let i = 1; i <= n; i++) {
            if (Solution.hasCycleDFS(i, adjList, visited, recStack)) {
                return true;
            }
        }

        return false;
    }
}

