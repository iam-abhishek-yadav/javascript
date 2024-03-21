class Solution {
    bottomView(root) {
        if (!root) return [];
        const map = new Map();
        const queue = [{node: root, hd: 0}];
        
        while (queue.length) {
            const { node, hd } = queue.shift();
            map.set(hd, node);
            if (node.left) queue.push({node: node.left, hd: hd - 1});
            if (node.right) queue.push({node: node.right, hd: hd + 1});
        }
        const bottomViewNodes = [];
        for (const [key, value] of [...map.entries()].sort((a, b) => a[0] - b[0])) {
            bottomViewNodes.push(value.data);
        }
        return bottomViewNodes;
    }
}
