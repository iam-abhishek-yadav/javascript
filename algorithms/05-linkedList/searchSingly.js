class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }
  
  class Solution {
    static searchInLinkedList(head, k) {
        while (head !== null) {
            if (head.data === k) {
                return 1;
            }
            head = head.next;
        }
        return 0;
    }
  }
  
  let list = new Node(1, new Node(2, new Node(3, new Node(4))));
  const elementToSearch = 3;
  const result = Solution.searchInLinkedList(list, elementToSearch);
  console.log(`Element ${elementToSearch} ${result ? 'found' : 'not found'} in the linked list.`);
  