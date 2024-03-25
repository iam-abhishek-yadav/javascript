function bellmanFord(graph, start) {
  const distances = {};
  const predecessor = {};
  const vertices = Object.keys(graph);

  for (const vertex of vertices) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  for (let i = 0; i < vertices.length - 1; i++) {
    for (const [source, edges] of Object.entries(graph)) {
      for (const [target, weight] of Object.entries(edges)) {
        if (distances[source] + weight < distances[target]) {
          distances[target] = distances[source] + weight;
          predecessor[target] = source;
        }
      }
    }
  }

  for (const [source, edges] of Object.entries(graph)) {
    for (const [target, weight] of Object.entries(edges)) {
      if (distances[source] + weight < distances[target]) {
        throw new Error("Graph contains negative cycle!");
      }
    }
  }

  return { distances, predecessor };
}
