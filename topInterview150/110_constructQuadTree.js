var construct = function(grid) {
    const dfs = (top, left, bottom, right, grid) => {
        let zero = 0, one = 0;
        for (let i = top; i <= bottom; ++i) {
            for (let j = left; j <= right; ++j) {
                if (grid[i][j] === 0) zero = 1;
                else one = 1;
            }
        }
        const isLeaf = zero + one === 1;
        const val = isLeaf && one === 1;
        const node = new Node(val, isLeaf);
        if (isLeaf) return node;
        const midX = (top + bottom) >> 1, midY = (left + right) >> 1;
        node.topLeft = dfs(top, left, midX, midY, grid);
        node.topRight = dfs(top, midY + 1, midX, right, grid);
        node.bottomLeft = dfs(midX + 1, left, bottom, midY, grid);
        node.bottomRight = dfs(midX + 1, midY + 1, bottom, right, grid);
        return node;
    };
    return dfs(0, 0, grid.length - 1, grid[0].length - 1, grid);
};

