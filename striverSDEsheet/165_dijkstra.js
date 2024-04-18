class Pair {
    constructor(node, dist) {
        this.node = node;
        this.dist = dist;
    }
}

class Solution {
    dijkstra(V, adj, S) {
        const distance = new Array(V).fill(Number.MAX_SAFE_INTEGER);
        distance[S] = 0;
        const visited = new Array(V).fill(false);

        for (let i = 0; i < V - 1; i++) {
            const u = this.minDistanceNode(distance, visited);
            visited[u] = true;

            for (const [v, dist] of adj[u]) {
                if (!visited[v] && distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + dist < distance[v]) {
                    distance[v] = distance[u] + dist;
                }
            }
        }

        return distance;
    }

    minDistanceNode(distance, visited) {
        let minDist = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;

        for (let i = 0; i < distance.length; i++) {
            if (!visited[i] && distance[i] <= minDist) {
                minDist = distance[i];
                minIndex = i;
            }
        }

        return minIndex;
    }
}
