// Q-206 in leetcode

var reverseList = function(head) {
    let current = head;
    let prev = null;
    while (current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)))));

const reversedList = reverseList(head);

let current = reversedList;
while (current != null) {
    console.log(current.val);
    current = current.next;
}
