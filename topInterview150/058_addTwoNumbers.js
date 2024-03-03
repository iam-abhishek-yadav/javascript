var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 !== null ? l1.val : 0;
        const val2 = l2 !== null ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
};
