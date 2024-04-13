class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Pair {
    constructor(node, num) {
        this.node = node;
        this.num = num;
    }
}

class Solution {
    static getTreeTraversal(root) {
        const ans = [[], [], []];
        const pre = ans[1];
        const inOrder = ans[0];
        const post = ans[2];

        if (!root) return ans;

        const stack = [];
        stack.push(new Pair(root, 1));

        while (stack.length) {
            const it = stack.pop();

            if (it.num === 1) {
                pre.push(it.node.data);
                it.num++;
                stack.push(it);
                if (it.node.left !== null) {
                    stack.push(new Pair(it.node.left, 1));
                }
            } else if (it.num === 2) {
                inOrder.push(it.node.data);
                it.num++;
                stack.push(it);
                if (it.node.right !== null) {
                    stack.push(new Pair(it.node.right, 1));
                }
            } else {
                post.push(it.node.data);
            }
        }

        return ans;
    }
}

