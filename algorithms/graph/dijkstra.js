class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({ node: node2, weight: weight });
        this.adjacencyList[node2].push({ node: node1, weight: weight });
    }

    dijkstra(startNode) {
        let distances = {};
        let visited = {};
        let pq = new PriorityQueue();

        this.nodes.forEach(node => {
            distances[node] = Infinity;
            visited[node] = false;
        });

        distances[startNode] = 0;
        pq.enqueue(startNode, 0);

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue().value;
            visited[minNode] = true;

            this.adjacencyList[minNode].forEach(neighbor => {
                let currentDistance = distances[minNode] + neighbor.weight;
                if (currentDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = currentDistance;
                    if (!visited[neighbor.node]) {
                        pq.enqueue(neighbor.node, currentDistance);
                    }
                }
            });
        }

        return distances;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

