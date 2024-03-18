var solveNQueens = function(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const res = [];
    
    const validate = (board, row, col) => {
        let dRow = row, dCol = col;
        while (dRow >= 0 && dCol >= 0) {
            if (board[dRow--][dCol--] === 'Q') return false;
        }

        dRow = row; dCol = col;
        while (dCol >= 0) {
            if (board[dRow][dCol--] === 'Q') return false;
        }
        dRow = row;
        dCol = col;
        while (dCol >= 0 && dRow < board.length) {
            if (board[dRow][dCol] === 'Q') return false;
            dCol--;
            dRow++;
        }
        return true;
    };

    const dfs = (board, col) => {
        if (col === board.length) {
            res.push(construct(board));
            return;
        }
        for (let row = 0; row < board.length; row++) {
            if (validate(board, row, col)) {
                board[row][col] = 'Q';
                dfs(board, col + 1);
                board[row][col] = '.';
            }
        }
    };

    const construct = (board) => {
        const list = [];
        for (let i = 0; i < board.length; i++) {
            const s = board[i].join('');
            list.push(s);
        }
        return list;
    };

    dfs(board, 0);
    return res;
};

