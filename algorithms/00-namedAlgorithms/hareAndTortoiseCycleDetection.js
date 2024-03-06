class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  let hare = head;
  let tortoise = head;

  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;

    if (hare === tortoise) {
      return true;
    }
  }

  return false;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1;
console.log(hasCycle(node1));
