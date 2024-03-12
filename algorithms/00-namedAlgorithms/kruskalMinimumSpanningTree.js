class DisjointSet {
  constructor() {
    this.parent = {};
  }

  makeSet(vertex) {
    this.parent[vertex] = vertex;
  }

  findSet(vertex) {
    if (this.parent[vertex] !== vertex) {
      this.parent[vertex] = this.findSet(this.parent[vertex]);
    }
    return this.parent[vertex];
  }

  unionSets(vertex1, vertex2) {
    const root1 = this.findSet(vertex1);
    const root2 = this.findSet(vertex2);
    this.parent[root1] = root2;
  }
}

function kruskals(graph) {
  const result = [];
  const disjointSet = new DisjointSet();
  const edges = [];
  for (const vertex in graph) {
    disjointSet.makeSet(vertex);
    for (const neighbor in graph[vertex]) {
      edges.push([vertex, neighbor, graph[vertex][neighbor]]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  for (const edge of edges) {
    const [vertex1, vertex2, weight] = edge;
    if (disjointSet.findSet(vertex1) !== disjointSet.findSet(vertex2)) {
      result.push(edge);
      disjointSet.unionSets(vertex1, vertex2);
    }
  }

  return result;
}

const graph = {
  A: { B: 2, C: 4 },
  B: { A: 2, C: 1, D: 3 },
  C: { A: 4, B: 1, D: 5 },
  D: { B: 3, C: 5 }
};
console.log(kruskals(graph));

