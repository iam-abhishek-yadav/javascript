class Queue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(100001).fill(0);
    }

    enqueue(e) {
        this.arr[this.rear % 100001] = e;
        this.rear++;
    }

    dequeue() {
        let rv;
        if (this.front % 100001 !== this.rear % 100001) {
            rv = this.arr[this.front % 100001];
            this.front++;
        } else {
            rv = -1;
        }
        return rv;
    }
}

