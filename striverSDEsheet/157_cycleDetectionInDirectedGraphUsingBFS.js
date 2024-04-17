class Solution {
    static hasCycleBFS(n, adjList) {
        const inDegree = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            for (let neighbor of adjList[i]) {
                inDegree[neighbor]++;
            }
        }

        const queue = [];
        for (let i = 1; i <= n; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let count = 0;
        while (queue.length > 0) {
            const currNode = queue.shift();
            count++;

            for (let neighbor of adjList[currNode]) {
                if (--inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return count !== n;
    }

    static detectCycleInDirectedGraph(n, edges) {
        const adjList = Array.from({ length: n + 1 }, () => []);

        for (let edge of edges) {
            const [u, v] = edge;
            adjList[u].push(v);
        }

        return Solution.hasCycleBFS(n, adjList);
    }
}

