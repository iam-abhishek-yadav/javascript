class Stack {
    constructor(capacity) {
        this.arr = new Array(capacity).fill(0);
        this.index = -1;
        this.mycapacity = capacity;
    }

    push(num) {
        if (!this.isFull()) {
            this.index++;
            this.arr[this.index] = num;
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const top = this.arr[this.index];
            this.arr[this.index] = 0;
            this.index--;
            return top;
        }
        return -1;
    }

    top() {
        if (!this.isEmpty()) {
            return this.arr[this.index];
        }
        return -1;
    }

    isEmpty() {
        return this.index === -1 ? 1 : 0;
    }

    isFull() {
        return this.index + 1 === this.mycapacity ? 1 : 0;
    }
}

