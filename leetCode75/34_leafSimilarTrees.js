const leafSimilar = (root1, root2) => {
    const getLeafValues = (root) => root ? (root.left ? getLeafValues(root.left) : []).concat(root.right ? getLeafValues(root.right) : [], root.left === null && root.right === null ? [root.val] : []) : [];
    
    const leaves1 = getLeafValues(root1);
    const leaves2 = getLeafValues(root2);
    
    return JSON.stringify(leaves1) === JSON.stringify(leaves2);
}
