var verticalTraversal = function(root) {
    const solution = [];
    
    const dfs = (node, depth, idx, solution) => {
        if (!node) return;
        solution.push([node.val, depth, idx]);
        dfs(node.left, depth + 1, idx - 1, solution);
        dfs(node.right, depth + 1, idx + 1, solution);
    };

    dfs(root, 0, 0, solution);
    
    solution.sort((a, b) => {
        const [a0, a1, a2] = a;
        const [b0, b1, b2] = b;
        if (a2 === b2) {
            if (a1 === b1) {
                return a0 - b0;
            }
            return a1 - b1;
        }
        return a2 - b2;
    });

    const ans = [];
    let pre = Number.MIN_SAFE_INTEGER;
    for (const node of solution) {
        const [val, , idx] = node;
        if (idx !== pre) {
            ans.push([]);
            pre = idx;
        }
        ans[ans.length - 1].push(val);
    }
    return ans;
};
