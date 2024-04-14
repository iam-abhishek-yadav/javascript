class Solution {
    mirror(node) {
        if (!node) return;
        let temp = node.left
        node.left = node.right
        node.right = temp
        this.mirror(node.left)
        this.mirror(node.right)
        return node
    }
}
