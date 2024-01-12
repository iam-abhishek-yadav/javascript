// Q-876 in leetcode

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
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

let middle = middleNode(head);

while (middle !== null) {
    console.log(middle.val);
    middle = middle.next;
}
