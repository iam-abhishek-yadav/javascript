var nearestExit = function(maze, entrance) {
    const [rows, cols] = [maze.length, maze[0].length];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    queue.push({row: entrance[0], col: entrance[1], steps: 0});
    while(queue.length > 0){
        const {row, col, steps} = queue.shift();
        if ((row === 0 || row === rows - 1 || col === 0 || col === cols - 1) && (row !== entrance[0] || col !== entrance[1])) return steps;

        maze[row][col] = '+';

        for(const [dx, dy] of directions){
            const [newRow, newCol] = [row+dx, col+dy];
            if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.'){
                queue.push({row: newRow, col: newCol, steps: steps+1});
                maze[newRow][newCol] = '+';
            }
        }
    }
    return -1;
};
