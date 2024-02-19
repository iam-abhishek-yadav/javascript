var pairSum = function(head) {
    const arr = [];
    let node = head;
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    const n = arr.length;
    let ans = 0;
    for (let i = 0; i < n >> 1; i++) {
        ans = Math.max(ans, arr[i] + arr[n - 1 - i]);
    }
    return ans;
};
