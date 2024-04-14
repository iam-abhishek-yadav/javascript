class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let ans = [];

function isLeaf(root) {
    return (root.left === null && root.right === null);
}

function addLeftBoundary(root) {
    let curr = root.left;
    while (curr !== null) {
        if (!isLeaf(curr))
            ans.push(curr.val);
        if (curr.left !== null)
            curr = curr.left;
        else
            curr = curr.right;
    }
}

function addLeaves(root) {
    if (isLeaf(root)) {
        ans.push(root.val);
        return;
    }
    if (root.left !== null)
        addLeaves(root.left);
    if (root.right !== null)
        addLeaves(root.right);
}

function addRightBoundary(root) {
    let curr = root.right;
    let subList = [];

    while (curr !== null) {
        if (!isLeaf(curr))
            subList.push(curr.val);
        if (curr.right !== null)
            curr = curr.right;
        else
            curr = curr.left;
    }
    subList.reverse();
    for (let i = 0; i < subList.length; i++) {
        ans.push(subList[i]);
    }
}

function traverseBoundary(root) {
    if (!isLeaf(root))
        ans.push(root.val);
    addLeftBoundary(root);
    addLeaves(root);
    addRightBoundary(root);

    return ans;
}

