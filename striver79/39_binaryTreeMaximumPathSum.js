var maxPathSum = function(root) {
    let max = -Infinity;
    const dfs = root => {
        if (!root) return 0;
        const left = Math.max(0, dfs(root.left));
        const right = Math.max(0, dfs(root.right));
        max = Math.max(max, left + right + root.val);
        return Math.max(left, right) + root.val;
    };
    dfs(root);
    return max;
};
