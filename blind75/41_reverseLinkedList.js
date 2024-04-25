var reverseList = function(head) {
    let curr = head, prev = null;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
