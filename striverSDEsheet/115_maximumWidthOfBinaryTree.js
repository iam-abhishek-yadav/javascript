var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    
    let maxWidth = 0;
    const queue = [{ node: root, index: BigInt(1) }];

    while (queue.length) {
        const levelSize = queue.length;
        let leftIndex = queue[0].index;
        for (let i = 0; i < levelSize; i++) {
            const { node, index } = queue.shift();
            if (i === levelSize - 1) {
                maxWidth = Math.max(maxWidth, Number(index - leftIndex) + 1);
            }
            if (node.left) queue.push({ node: node.left, index: index * BigInt(2) });
            if (node.right) queue.push({ node: node.right, index: index * BigInt(2) + BigInt(1) });
        }
    }

    return maxWidth;
};
