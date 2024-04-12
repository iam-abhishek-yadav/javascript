var postorderTraversal = function(root) {
    if (!root) return [];
    const result = [], stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        result.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result;
};
