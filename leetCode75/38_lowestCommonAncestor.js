var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null;
    }
    
    if (root.val === p.val || root.val === q.val) {
        return root;
    }
    
    var leftLCA = lowestCommonAncestor(root.left, p, q);
    var rightLCA = lowestCommonAncestor(root.right, p, q);
    
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }
    
    return (leftLCA !== null) ? leftLCA : rightLCA;
};
