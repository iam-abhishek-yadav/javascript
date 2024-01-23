// Q-328 in leetcode
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const reorderedList = oddEvenList(head);

let current = reorderedList;
while (current) {
    console.log(current.val);
    current = current.next;
}
