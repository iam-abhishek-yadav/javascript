var maxSumBST = function(root) {
    const inf = 1 << 30;
    let maxSum = 0;
    const dfs = (node) => {
        if (!node) {
            return [true, inf, -inf, 0];
        }
        const [leftBST, leftMin, leftMax, leftSum] = dfs(node.left);
        const [rightBST, rightMin, rightMax, rightSum] = dfs(node.right);
        if (leftBST && rightBST && leftMax < node.val && node.val < rightMin) {
            const currentSum = leftSum + rightSum + node.val;
            maxSum = Math.max(maxSum, currentSum);
            return [true, Math.min(leftMin, node.val), Math.max(rightMax, node.val), currentSum];
        }
        return [false, 0, 0, 0];
    };
    dfs(root);
    return maxSum;
};
