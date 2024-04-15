var bstFromPreorder = function(preorder) {
    const n = preorder.length;
    const next = new Array(n), stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && preorder[stack[stack.length - 1]] < preorder[i]) stack.pop();
        next[i] = stack[stack.length - 1] ?? n;
        stack.push(i);
    }
    const dfs = (left, right) => {
        if (left >= right) return null;
        return new TreeNode(preorder[left], dfs(left + 1, next[left]), dfs(next[left], right));
    };
    return dfs(0, n);
};
