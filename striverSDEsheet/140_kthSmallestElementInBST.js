var kthSmallest = function(root, k) {
    const dfs = (root) => {
        if(!root) return -1;
        const { val, left, right } = root;
        const l = dfs(left);
        if (l !== -1) return l;
        k--;
        if (k === 0) return val;
        return dfs(right);
    }
    return dfs(root);
};
