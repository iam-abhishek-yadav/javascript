var removeNthFromEnd = function(head, n) {
    const temp = new ListNode(0, head);
    let [slow, fast] = [temp, temp];
    while(n--) fast = fast.next;
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return temp.next;
};
