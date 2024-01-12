class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }
  
  class Solution {
    static lengthOfLoop(head) {
        let slow = head, fast = head;
  
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                break;
            }
        }
  
        if (fast === null || fast.next === null) {
            return 0;
        }
  
        slow = head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
  
        slow = slow.next;
        let count = 1;
  
        while (slow !== fast) {
            slow = slow.next;
            count++;
        }
  
        return count;
    }
  }
  
  const node5 = new Node(10);
  const node4 = new Node(5, node5);
  const node3 = new Node(3, node4);
  const node2 = new Node(10, node3);
  const node1 = new Node(4, node2);
  
  node5.next = node2;
  
  const lengthOfCycle = Solution.lengthOfLoop(node1);
  console.log(`Length of cycle: ${lengthOfCycle}`);
  