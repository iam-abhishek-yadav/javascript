class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

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

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};
const startNode = 'A';
console.log(dijkstra(graph, startNode));
