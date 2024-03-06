var numIslands = function(grid) {
    let islands = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1'){
                islands++;
                markVisited(grid,i,j);
            }
        }
    }
    return islands;
};
var markVisited = (grid, i, j) => {
    if(i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j]=='0') return;
    grid[i][j] = '0';
    markVisited(grid,i+1,j);
    markVisited(grid,i-1,j);
    markVisited(grid,i,j+1);
    markVisited(grid,i,j-1);
}
