class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

function constructDLL(arr) {
    if (arr.length === 1) return new Node(arr[0]);

    let head = new Node(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
        let curr = new Node(arr[i]);
        curr.prev = temp;
        temp.next = curr;
        temp = temp.next;
    }

    return head;
}

const arr = [1, 2, 3, 4, 5];
const dll = constructDLL(arr);

let current = dll;
while (current) {
    console.log(current.data);
    current = current.next;
}
