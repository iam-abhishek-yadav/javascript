var goodNodes = function(root) {
    let cnt = 0;
    const dfs = (root, max) => {
        if(!root) return;
        if(max <= root.val) {
            cnt++;
            max = root.val;
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }
    dfs(root, -Infinity);
    return cnt;
};
