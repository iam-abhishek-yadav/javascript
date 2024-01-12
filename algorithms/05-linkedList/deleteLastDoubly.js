class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
  }
  
  function deleteLastNode(head) {
    if (head === null || head.next === null) {
        return null;
    }
  
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
  
    current.prev.next = null;
  
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
  
  const modifiedList = deleteLastNode(node1);
  
  console.log("\nModified Doubly Linked List:");
  let modifiedCurrent = modifiedList;
  while (modifiedCurrent) {
      console.log(modifiedCurrent.data);
      modifiedCurrent = modifiedCurrent.next;
  }