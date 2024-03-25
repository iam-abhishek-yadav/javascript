function floydWarshall(graph) {
  const vertices = Object.keys(graph);
  const distances = {};

  for (const vertex1 of vertices) {
    distances[vertex1] = {};
    for (const vertex2 of vertices) {
      if (vertex1 === vertex2) {
        distances[vertex1][vertex2] = 0;
      } else if (graph[vertex1][vertex2] !== undefined) {
        distances[vertex1][vertex2] = graph[vertex1][vertex2];
      } else {
        distances[vertex1][vertex2] = Infinity;
      }
    }
  }

  for (const k of vertices) {
    for (const i of vertices) {
      for (const j of vertices) {
        if (distances[i][k] + distances[k][j] < distances[i][j]) {
          distances[i][j] = distances[i][k] + distances[k][j];
        }
      }
    }
  }

  return distances;
}
