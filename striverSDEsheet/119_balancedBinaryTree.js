var isBalanced = function(root) {
    if (root == null) return true;
    const height = (temp) => {
        if (temp == null) return 0;
        const leftHeight = height(temp.left);
        const rightHeight = height(temp.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    if (Math.abs(height(root.left) - height(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};
