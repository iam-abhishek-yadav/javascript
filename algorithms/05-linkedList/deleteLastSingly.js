class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }
  
  class Solution {
    static deleteLast(list) {
        if (list === null || list.next == null) {
            return null;
        }
  
        let temp = list;
  
        while (temp.next && temp.next.next !== null) {
            temp = temp.next;
        }
  
        temp.next = null;
        return list;
    }
  }
  
  let list = new Node(1, new Node(2, new Node(3)));
  console.log("Linked List before deletion:", list);
  
  list = Solution.deleteLast(list);
  console.log("Linked List after deletion:", list);
  