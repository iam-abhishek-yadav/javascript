var findTarget = function(root, k) {
    const set = new Set();
    const inorderTraversal = (node) => {
        if (!node) return false;
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        return inorderTraversal(node.left) || inorderTraversal(node.right);
    }
    return inorderTraversal(root);
};
