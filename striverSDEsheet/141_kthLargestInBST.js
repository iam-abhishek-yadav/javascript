class Solution {
    constructor() {
        this.count = 0;
        this.ans = 0;
    }
    kthLargest(root, K) {
        this.revInorder(root, K);
        return this.ans;
    }

    revInorder(root, k) {
        if (root === null) return;
        this.revInorder(root.right, k);
        this.count++;
        if (this.count === k) {
            this.ans = root.data;
            return;
        }
        this.revInorder(root.left, k);
    }
}
