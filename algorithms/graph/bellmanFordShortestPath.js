function bellmanFord(graph, start) {
    const numVertices = graph.length;
    const distances = Array(numVertices).fill(Infinity);
    distances[start] = 0;

    for (let i = 0; i < numVertices - 1; i++) {
        for (let v = 0; v < numVertices; v++) {
            for (let neighbor = 0; neighbor < numVertices; neighbor++) {
                if (graph[v][neighbor] !== 0) {
                    const distanceToNeighbor = distances[v] + graph[v][neighbor];
                    if (distanceToNeighbor < distances[neighbor]) {
                        distances[neighbor] = distanceToNeighbor;
                    }
                }
            }
        }
    }

    // Check for negative cycles
    for (let v = 0; v < numVertices; v++) {
        for (let neighbor = 0; neighbor < numVertices; neighbor++) {
            if (graph[v][neighbor] !== 0) {
                const distanceToNeighbor = distances[v] + graph[v][neighbor];
                if (distanceToNeighbor < distances[neighbor]) {
                    return "Graph contains negative cycle";
                }
            }
        }
    }

    return distances;
}

