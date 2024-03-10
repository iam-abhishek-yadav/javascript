var findMaximizedCapital = function(k, w, profits, capital) {
    const n = capital.length;
    const q1 = new minHeap((a, b) => a[0] - b[0]);
    for(let i=0;i<n;i++){
        q1.offer([capital[i], profits[i]]);
    }
    const q2 = new minHeap((a, b) => b - a);
    while(k-- > 0){
        while(q1.size() > 0 && q1.peek()[0] <= w){
            q2.offer(q1.poll()[1]);
        }
        if(q2.size() === 0) break;
        w += q2.poll();
    }
    return w;
};

class minHeap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator || ((a, b) => a - b);
    }

    offer(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    poll() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    peek() {
        if (this.size() === 0) return null;
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;

            if (leftChildIndex < this.size() && this.comparator(this.heap[leftChildIndex], this.heap[smallestChildIndex]) < 0) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this.comparator(this.heap[rightChildIndex], this.heap[smallestChildIndex]) < 0) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== index) {
                [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}
