var equalPairs = function(grid) {
    const n = grid.length;
    const g = Array.from({length: n}, () => Array(n).fill(0));
    for(let j=0;j<n;j++){
        for(let i=0;i<n;i++){
            g[i][j] = grid[j][i];
        }
    }

    let ans = 0;
    for(const row of grid){
        for(const col of g){
            if(row.toString() === col.toString()) ans++;
        }
    }
    return ans;
};
