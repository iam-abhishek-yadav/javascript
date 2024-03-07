var snakesAndLadders = function(board) {
    const n = board.length;
    const target = n*n;
    const [queue, visited] = [[1], new Array(target + 1).fill(false)];
    visited[1] = true;
    let moves = 0;
    while(queue.length > 0){
        const size = queue.length;
        for(let t=0;t<size;t++){
            const curr = queue.shift();
            if(curr === target) return moves;
            for(let next = curr + 1; next <= Math.min(curr + 6, target); next++){
                const [i, j] = getCoordinates(next, n);
                const dest = board[i][j] === -1 ? next : board[i][j];
                if(!visited[dest]){
                    visited[dest] = true;
                    queue.push(dest);
                }
            }
        }
        moves++;
    }
    return -1;
};

var getCoordinates = (x, n) => {
    const row = n - Math.floor((x - 1) / n) - 1;
    const col = (n - 1 - row) % 2 === 0 ? (x - 1) % n : n - 1 - (x - 1) % n;
    return [row, col]; 
}
