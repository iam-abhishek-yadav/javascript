class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }
  
  class Solution {
    static length(head) {
        if (head === null) {
            return 0;
        }
  
        let count = 0;
        while (head !== null) {
            count++;
            head = head.next;
        }
  
        return count;
    }
  }
  
  let list = new Node(1, new Node(2, new Node(3, new Node(4))));
  const listLength = Solution.length(list);
  console.log("Length of the linked list:", listLength);
  