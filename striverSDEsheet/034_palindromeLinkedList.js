var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

    let [slow, fast] = [head, head];
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverse(slow.next);
    slow = slow.next;
    
    let dummy = head;
    while (slow !== null) {
        if (dummy.val !== slow.val) return false;
        dummy = dummy.next;
        slow = slow.next;
    }

    return true;
};

var reverse = (head) => {
    let [curr, prev] = [head, null];
    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};
