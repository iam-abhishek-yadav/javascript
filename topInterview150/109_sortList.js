var sortList = function(head) {
    if(!head || !head.next) return head;
    let [slow, fast] = [head, head.next];
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let t = slow.next;
    slow.next = null;
    let [left, right] = [sortList(head), sortList(t)];
    const dummy = new ListNode();
    let curr = dummy;
    while(left && right){
        if(left.val <= right.val){
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }
    curr.next = left || right;
    return dummy.next;
};
