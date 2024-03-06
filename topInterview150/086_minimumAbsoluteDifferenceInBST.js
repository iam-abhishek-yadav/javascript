var getMinimumDifference = function(root) {
    let min = Infinity, prev = null;
    const inorderTraversal = function(node) {
        if (node === null) return;
        inorderTraversal(node.left);
        if (prev !== null) {
            min = Math.min(min, Math.abs(node.val - prev));
        }
        prev = node.val;
        inorderTraversal(node.right);
    };
    inorderTraversal(root);

    return min;
};
