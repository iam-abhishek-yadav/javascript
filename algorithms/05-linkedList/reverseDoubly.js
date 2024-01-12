class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

function reverseDLL(head) {
    let current = head;
    let temp = null;

    while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        head = current;
        current = current.prev;
    }

    return head;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

console.log("Original Doubly Linked List:");
let originalCurrent = node1;
while (originalCurrent) {
    console.log(originalCurrent.data);
    originalCurrent = originalCurrent.next;
}

const reversedList = reverseDLL(node1);

console.log("\nReversed Doubly Linked List:");
let reversedCurrent = reversedList;
while (reversedCurrent) {
    console.log(reversedCurrent.data);
    reversedCurrent = reversedCurrent.next;
}
