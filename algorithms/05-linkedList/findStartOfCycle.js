// Q-142 in leetcode

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
  }
  
  var detectCycle = function(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
            break;
        }
    }
  
    if (fast === null || fast.next === null) {
        return null;
    }
  
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
  
    return slow;
  };
  
  const head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)))));
  
  head.next.next.next.next.next = head.next;
  
  const cycleStartNode = detectCycle(head);
  
  console.log(cycleStartNode ? `The cycle starts at node with value ${cycleStartNode.val}.` : "There is no cycle in the linked list.");
  