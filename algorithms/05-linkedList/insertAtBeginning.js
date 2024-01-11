class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
  }
  
  class Solution {
    static insertAtFirst(list, newValue) {
        const head = new Node(newValue);
        head.next = list;
        return head;
    }
  }
  
  let list = new Node(2, new Node(3, new Node(4)));
  list = Solution.insertAtFirst(list, 1);
  console.log(list);
  