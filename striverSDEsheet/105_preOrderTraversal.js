var preorderTraversal = function(root) {
    if (!root) return [];
    const result = [], stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};
