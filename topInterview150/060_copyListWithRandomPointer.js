var copyRandomList = function(head) {
    if (head === null) return null;

    for (let cur = head; cur !== null;) {
        let node = new Node(cur.val, cur.next);
        cur.next = node;
        cur = node.next;
    }

    for (let cur = head; cur !== null; cur = cur.next.next) {
        if (cur.random !== null) {
            cur.next.random = cur.random.next;
        }
    }

    let ans = head.next;
    for (let cur = head; cur !== null;) {
        let nxt = cur.next;
        if (nxt !== null) {
            cur.next = nxt.next;
        }
        cur = nxt;
    }

    return ans;
};
