var isSubtree = function (root, subRoot) {
    if (!root) return false;
    let dfs = function (root1, root2) {
        if (!root1 && !root2) {
            return true;
        }
        if (!root1 || !root2) {
            return false;
        }
        return (
            root1.val == root2.val && dfs(root1.left, root2.left) && dfs(root1.right, root2.right)
        );
    };
    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
