var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    let fast = head.next,
        slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
};
