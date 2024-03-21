var diameterOfBinaryTree = function(root) {
    let res = 0;
    const dfs = (root) => {
        if(root === null) return 0;
        const l = dfs(root.left);
        const r = dfs(root.right);
        res = Math.max(res, l + r);
        return Math.max(l, r) + 1;
    }
    dfs(root);
    return res;
};
