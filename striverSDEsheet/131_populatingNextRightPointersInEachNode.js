var connect = function(root) {
    if (root == null || root.left == null) return root;
    const { left, right, next } = root;
    left.next = right;
    if (next != null) right.next = next.left;
    connect(left);
    connect(right);
    return root;
};
