class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }
  
  function constructLL(arr) {
    if (arr.length === 0) {
        return null;
    }
  
    let head = new Node(arr[0]);
    let temp = head;
  
    for (let i = 1; i < arr.length; i++) {
        let curr = new Node(arr[i]);
        temp.next = curr;
        temp = temp.next;
    }
  
    return head;
  }
  
  const arr = [1, 2];
  const linkedList = constructLL(arr);
  console.log(linkedList);
  