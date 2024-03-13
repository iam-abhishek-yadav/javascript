function prims(graph) {
  const visited = new Set();
  const minimumSpanningTree = [];
  const startVertex = Object.keys(graph)[0];
  visited.add(startVertex);

  while (visited.size < Object.keys(graph).length) {
    let minWeight = Infinity;
    let minEdge;

    for (const vertex of visited) {
      for (const neighbor in graph[vertex]) {
        if (!visited.has(neighbor) && graph[vertex][neighbor] < minWeight) {
          minWeight = graph[vertex][neighbor];
          minEdge = [vertex, neighbor, minWeight];
        }
      }
    }

    minimumSpanningTree.push(minEdge);
    visited.add(minEdge[1]);
  }

  return minimumSpanningTree;
}

const graph = {
  A: { B: 2, C: 4 },
  B: { A: 2, C: 1, D: 3 },
  C: { A: 4, B: 1, D: 5 },
  D: { B: 3, C: 5 }
};
console.log(prims(graph));

