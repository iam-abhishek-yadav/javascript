class MinHeap {
    constructor(size) {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    extractMinElement() {
        if (this.heap.length === 0) {
            return -1;
        }

        const ans = this.heap[0];
        this.deleteElement(1);
        return ans;
    }

    deleteElement(ind) {
        if (this.heap.length === 0 || ind > this.heap.length) {
            return;
        }

        ind = ind - 1;
        this.swap(ind, this.heap.length - 1);
        this.heap.pop();

        const n = this.heap.length;

        if (ind !== 0 && this.heap[ind] < this.heap[this.parent(ind)]) {
            this.heapifyUp(ind);
        } else {
            this.heapifyDown(ind);
        }
    }

    heapifyDown(idx) {
        while (idx < this.heap.length) {
            const first = this.left(idx);
            const second = this.right(idx);

            let min = this.min(idx, first, second);

            if (min === this.heap[idx]) {
                break;
            } else if (min === this.heap[first]) {
                this.swap(idx, first);
                idx = first;
            } else {
                this.swap(idx, second);
                idx = second;
            }
        }
    }

    min(i, j, k) {
        let min = this.heap[i];
        const n = this.heap.length;

        if (j < n) {
            min = Math.min(min, this.heap[j]);
        }
        if (k < n) {
            min = Math.min(min, this.heap[k]);
        }

        return min;
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    insert(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        this.heapifyUp(idx);
    }

    heapifyUp(idx) {
        while (idx !== 0) {
            if (this.heap[idx] < this.heap[this.parent(idx)]) {
                this.swap(idx, this.parent(idx));
                idx = this.parent(idx);
            } else {
                break;
            }
        }
    }
}

