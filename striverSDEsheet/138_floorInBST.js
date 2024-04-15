class Solution {
    static floorInBST(root, X) {
        let res = null;

        while (root !== null) {
            if (root.data === X)
                return root.data;
            else if (root.data > X)
                root = root.left;
            else {
                res = root;
                root = root.right;
            }
        }

        return res.data;
    }
}

