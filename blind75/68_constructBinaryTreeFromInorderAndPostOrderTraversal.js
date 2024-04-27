var buildTree = function(inorder, postorder) {
    const length = postorder.length;
    if (length === 0) return null;
    const rootValue = postorder[length - 1];
    const rootIndexInInorder = inorder.indexOf(rootValue);
    return new TreeNode(
        rootValue,
        buildTree(inorder.slice(0, rootIndexInInorder), postorder.slice(0, rootIndexInInorder)),
        buildTree(inorder.slice(rootIndexInInorder + 1), postorder.slice(rootIndexInInorder, length - 1))
    );
};
