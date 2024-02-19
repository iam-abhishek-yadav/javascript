var pathSum = function(root, targetSum) {
    let cnt = new Map();
    const dfs = (root, curr) => {
        if(!root) return 0;
        curr += root.val;
        let ans = cnt.get(curr - targetSum) || 0;
        cnt.set(curr, (cnt.get(curr) || 0) + 1);
        ans += dfs(root.left, curr);
        ans += dfs(root.right, curr);
        cnt.set(curr, (cnt.get(curr) || 0) - 1);
        return ans;
    }
    cnt.set(0, 1);
    return dfs(root, 0);
};
