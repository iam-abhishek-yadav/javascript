var exist = function(board, word) {
    const [m, n] = [board.length, board[0].length];
    const dirs = [-1, 0, 1, 0, -1];
    const backtrack = (i, j, k) => {
        if(k === word.length-1) return board[i][j] === word[k];
        if(board[i][j] !== word[k]) return false;
        const c = board[i][j];
        board[i][j] = '0';
        for(let l=0;l<4;l++){
            const [x, y] = [i + dirs[l], j + dirs[l+1]];
            const valid = x >= 0 && x < m && y >= 0 && y < n;
            if(valid && board[x][y] !== '0' && backtrack(x, y, k+1)) return true;
        }
        board[i][j] = c;
        return false;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(backtrack(i, j, 0)) return true;
        }
    }
    return false;
};
