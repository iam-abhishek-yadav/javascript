function isParentSum(root) {
    let q = [];
    q.push(root);
    while (q.length > 0) {
        let n = q.shift();
        if (n.left !== null && n.right !== null) {
            q.push(n.left);
            q.push(n.right);
            if ((n.left.val + n.right.val) !== n.val) {
                return false;
            }
        } else if (n.left !== null) {
            q.push(n.left);
            if (n.left.val !== n.val) {
                return false;
            }
        } else if (n.right !== null) {
            q.push(n.right);
            if (n.right.val !== n.val) {
                return false;
            }
        }
    }
    return true;
}
