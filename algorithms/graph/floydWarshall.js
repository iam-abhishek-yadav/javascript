function floydWarshall(graph) {
    const numVertices = graph.length;
    const dist = [];

    for (let i = 0; i < numVertices; i++) {
        dist[i] = [];
        for (let j = 0; j < numVertices; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] === 0) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

