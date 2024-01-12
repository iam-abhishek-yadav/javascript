// Q-141 in leetcode

var hasCycle = function(head) {
    let [slow, fast] = [head, head];
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
  };
  
  class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
  }
  
  const head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)))));
  
  head.next.next.next.next.next = head.next;
  
  const hasCycleResult = hasCycle(head);
  
  console.log(hasCycleResult ? "The linked list has a cycle." : "The linked list does not have a cycle.");
  