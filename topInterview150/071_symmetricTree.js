var isSymmetric = function(root) {
    const dfs = (root1, root2) => {
        if(!root1 && !root2) return true;
        if(!root1 || !root2 || root1.val !== root2.val) return false;
        return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
    }
    return dfs(root, root);
};
