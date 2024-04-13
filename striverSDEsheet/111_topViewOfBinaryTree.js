class Solution{
    topView(root){
        if (!root) return [];

        const queue = [{ node: root, hd: 0 }];
        const map = new Map();

        while (queue.length) {
            const { node, hd } = queue.shift();

            if (!map.has(hd)) {
                map.set(hd, node.data);
            }

            if (node.left) {
                queue.push({ node: node.left, hd: hd - 1 });
            }
            if (node.right) {
                queue.push({ node: node.right, hd: hd + 1 });
            }
        }

        const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
        const topView = [];
        for (const key of sortedKeys) {
            topView.push(map.get(key));
        }
        return topView;
    }
}
