var numIslands = function(grid) {
    let count = 0;
    const [m, n] = [grid.length, grid[0].length];
    const mark = (row, col) => {
        if(row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') return;
        grid[row][col] = '0';
        mark(row+1, col);
        mark(row-1, col);
        mark(row, col+1);
        mark(row, col-1);
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === '1') count++;
            mark(i, j);
        }
    }
    return count;
};
