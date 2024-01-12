class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

function insertAtTail(list, K) {
    if (list === null) return new Node(K);

    let temp = new Node(K);
    let curr = list;

    while (curr.next !== null) {
        curr = curr.next;
    }

    curr.next = temp;
    temp.prev = curr;

    return list;
}

const initialList = new Node(1);
const updatedList = insertAtTail(initialList, 2);

let current = updatedList;
while (current) {
    console.log(current.data);
    current = current.next;
}
