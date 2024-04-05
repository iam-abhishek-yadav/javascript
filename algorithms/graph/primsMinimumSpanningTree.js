function prim(graph) {
    const numVertices = graph.length;
    const minHeap = new MinHeap();
    const visited = new Array(numVertices).fill(false);
    const result = [];

    minHeap.insert(0, 0);

    while (!minHeap.isEmpty()) {
        const { key, value } = minHeap.extractMin();
        if (visited[key]) continue;
        visited[key] = true;
        result.push({ key, value });

        for (let i = 0; i < numVertices; i++) {
            if (graph[key][i] !== 0 && !visited[i]) {
                minHeap.insert(i, graph[key][i]);
            }
        }
    }

    return result;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(key, value) {
        this.heap.push({ key, value });
        this.bubbleUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }
        const min = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent.value <= element.value) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.value < element.value) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.value < element.value) || (swap !== null && rightChild.value < leftChild.value)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

