function calculatePrimsMST(n, m, g) {
    const adj = new Array(n + 1).fill(null).map(() => []);
    for (let i = 0; i <= n; i++) {
        adj[i] = [];
    }

    for (const edge of g) {
        const u = edge[0];
        const v = edge[1];
        const wt = edge[2];

        adj[u].push([v, wt]);
        adj[v].push([u, wt]);
    }

    const ans = [];
    const vis = new Array(n + 1).fill(false);

    const pqComparator = (a, b) => a[0] - b[0];
    const pq = new PriorityQueue(pqComparator);

    pq.enqueue([0, 1, -1]);

    while (!pq.isEmpty()) {
        const tp = pq.dequeue();

        const wt = tp[0];
        const node = tp[1];
        const parent = tp[2];

        if (vis[node]) continue;

        vis[node] = true;

        if (parent !== -1) {
            ans.push([node, parent, wt]);
        }

        for (const edge of adj[node]) {
            const adjNode = edge[0];
            const adjWt = edge[1];

            if (!vis[adjNode]) {
                pq.enqueue([adjWt, adjNode, node]);
            }
        }
    }

    return ans;
}

// Priority Queue implementation
class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    dequeue() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[parentIndex], this.heap[index]) < 0) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (index < this.heap.length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let nextIndex = index;

            if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[nextIndex]) < 0) {
                nextIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[nextIndex]) < 0) {
                nextIndex = rightChildIndex;
            }

            if (nextIndex === index) {
                break;
            }

            [this.heap[index], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[index]];
            index = nextIndex;
        }
    }
}

