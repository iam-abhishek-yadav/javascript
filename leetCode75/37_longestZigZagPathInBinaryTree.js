var longestZigZag = function(root) {
    let max = 0;
    const dfs = (root, left, right) => {
        if (!root) return;
        max = Math.max(max, Math.max(left, right));
        dfs(root.left, right + 1, 0);
        dfs(root.right, 0, left + 1);
    }
    dfs(root, 0, 0);
    return max;
};

