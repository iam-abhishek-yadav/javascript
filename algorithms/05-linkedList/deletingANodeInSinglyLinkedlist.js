// Q-237 in leetcode

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }
  
  class Solution {
  
    static deleteNode(node) {
        if (node === null || node.next === null) return null;
  
        node.data = node.next.data;
        node.next = node.next.next;
    }
  }
  
  let list = new Node(2, new Node(3, new Node(4)));
  Solution.deleteNode(list.next);
  console.log("Linked List after deletion:", list);
  