var kSmallestPairs = function(nums1, nums2, k) {
    const q = new minHeap((a, b) => a[0] - b[0]);

    for (let i = 0; i < Math.min(nums1.length, k); ++i) {
        q.offer([nums1[i] + nums2[0], i, 0]);
    }

    const ans = [];

    while (!q.isEmpty() && k > 0) {
        const e = q.poll();
        ans.push([nums1[e[1]], nums2[e[2]]]);
        --k;

        if (e[2] + 1 < nums2.length) {
            q.offer([nums1[e[1]] + nums2[e[2] + 1], e[1], e[2] + 1]);
        }
    }

    return ans;
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

    isEmpty() {
        return this.size() === 0;
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

