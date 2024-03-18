var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let [odd, even, evenHead] = [head, head.next, head.next];
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};
