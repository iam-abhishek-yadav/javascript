var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;
    if(root.val === p.val || root.val === q.val) return root;
    const leftLCA = lowestCommonAncestor(root.left, p, q);    
    const rightLCA = lowestCommonAncestor(root.right, p, q);  
    if(leftLCA !== null && rightLCA !== null) return root;
    return (leftLCA !== null) ? leftLCA : rightLCA;  
};
