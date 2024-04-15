var isValidBST = function(root) {
    let prev = null;
    const dfs = function (root) {
        if (!root) return true;
        if (!dfs(root.left)) return false;
        if (prev && prev.val >= root.val) return false;
        prev = root;
        if (!dfs(root.right)) return false;
        return true;
    };
    return dfs(root);
};
