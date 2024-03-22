class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    static getParents(root, parent_track) {
        const q = [];
        q.push(root);

        while (q.length > 0) {
            const node = q.shift();

            if (node.left !== null) {
                q.push(node.left);
                parent_track.set(node.left, node);
            }

            if (node.right !== null) {
                q.push(node.right);
                parent_track.set(node.right, node);
            }
        }
    }

    static findFirstburn(root, start) {
        const q = [];
        let ans = null;
        q.push(root);

        while (q.length > 0) {
            const node = q.shift();

            if (node.data === start) {
                ans = node;
                break;
            }

            if (node.left !== null) {
                q.push(node.left);
            }

            if (node.right !== null) {
                q.push(node.right);
            }
        }

        return ans;
    }

    static timeToBurnTree(root, start) {
        if (root.left === null && root.right === null) return 0;

        const parent_track = new Map();
        this.getParents(root, parent_track);

        const firstBurn = this.findFirstburn(root, start);

        const visited = new Map();
        const q = [];
        q.push(firstBurn);
        visited.set(firstBurn, true);
        let time = 0;

        while (q.length > 0) {
            const size = q.length;
            time++;

            for (let i = 0; i < size; i++) {
                const node = q.shift();

                if (node.left !== null && !visited.has(node.left)) {
                    q.push(node.left);
                    visited.set(node.left, true);
                }

                if (node.right !== null && !visited.has(node.right)) {
                    q.push(node.right);
                    visited.set(node.right, true);
                }

                if (parent_track.get(node) !== undefined && !visited.has(parent_track.get(node))) {
                    q.push(parent_track.get(node));
                    visited.set(parent_track.get(node), true);
                }
            }
        }

        return time - 1;
   }
}
