var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    return minHeap.peek();
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }

        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.size() - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] < this.heap[parentIndex]) {
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

            if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
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
};

