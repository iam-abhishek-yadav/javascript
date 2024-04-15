class Solution {
    static findCeil(node, x) {
        return this.helper(node, x, -1);
    }

    static helper(root, x, ceil) {
        if (root === null) return ceil;
        if (x > root.data) return this.helper(root.right, x, ceil);
        else {
            ceil = root.data;
            return this.helper(root.left, x, ceil);
        }
    }
}

