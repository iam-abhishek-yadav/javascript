function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const priorityQueue = new PriorityQueue();

  for (const vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }

  distances[start] = 0;
  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const currentVertex = priorityQueue.dequeue().element;

    if (visited[currentVertex]) continue;
    visited[currentVertex] = true;

    for (const neighbor in graph[currentVertex]) {
      const newDistance = distances[currentVertex] + graph[currentVertex][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}
