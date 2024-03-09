var mergeKLists = function(lists) {
    if(lists === null || lists.length === 0) return null;
    return mergeList(lists, 0, lists.length-1);
};

var mergeList = function(list, start, end){
    if(start === end) return list[start];
    let mid = (start + end) >> 1;
    const left = mergeList(list, start, mid);
    const right = mergeList(list, mid+1, end);
    return merge(left, right);
}

var merge = function(head1, head2) {
    const res = new ListNode(-1);
    let curr = res;
    while(head1 !== null || head2 !== null){
        if(head1 === null) {
            curr.next = head2;
            head2 = head2.next;
        } else if(head2 === null){
            curr.next = head1;
            head1 = head1.next;
        } else if(head1.val < head2.val){
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
        curr = curr.next;
    }
    return res.next;
}
