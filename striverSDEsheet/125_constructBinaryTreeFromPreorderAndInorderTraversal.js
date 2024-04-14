var buildTree = function(preorder, inorder) {
    const inorderMap = new Map(), length = inorder.length;
    for (let i = 0; i < length; ++i) {
        inorderMap.set(inorder[i], i);
    }
    const constructTree = (preStart, inStart, size) => {
        if (size <= 0) return null;
        const rootValue = preorder[preStart];
        const inorderIndex = inorderMap.get(rootValue);
        const leftSize = inorderIndex - inStart;
        const leftSubtree = constructTree(preStart + 1, inStart, leftSize);
        const rightSubtree = constructTree(preStart + leftSize + 1, inorderIndex + 1, size - leftSize - 1);
        return new TreeNode(rootValue, leftSubtree, rightSubtree);
    };
    return constructTree(0, 0, length);
};
