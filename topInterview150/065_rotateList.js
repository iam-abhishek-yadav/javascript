var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let cur = head, n = 0;
    while (cur) {
        cur = cur.next;
        ++n;
    }
    k %= n;
    if (k === 0) return head;
    let fast = head, slow = head;
    while (k--) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    const ans = slow.next;
    slow.next = null;
    fast.next = head;
    return ans;
};
