var deleteNode = function(root, key) {
    if(!root) return null;
    const {val, left, right} = root;
    if(val > key) root.left = deleteNode(root.left, key);
    else if(val < key) root.right = deleteNode(root.right, key);
    else {
        if(left === null && right === null) root = null;
        else if(left === null || right === null) root = left || right;
        else {
            if(right.left === null){
                right.left = left;
                root = right;
            } else {
                let min = right;
                while(min.left.left !== null){
                    min = min.left;
                }
                const minVal = min.left.val;
                root.val = minVal;
                min.left = deleteNode(min.left, minVal);
            }
        }
    }
    return root;
};
