var sumNumbers = function(root) {
    const dfs = (root, sum) => {
        if(!root) return 0;
        sum += root.val;
        if(!root.left && !root.right) return +sum;
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
    return dfs(root, '');
};
