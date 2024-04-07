var solveSudoku = function(board) {
    let ok = false;
    let t = [];
    let row = Array.from({ length: 9 }, () => Array(9).fill(false));
    let col = Array.from({ length: 9 }, () => Array(9).fill(false));
    let block = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Array(9).fill(false)));

    const dfs = function(k) {
        if (k === t.length) {
            ok = true;
            return;
        }
        const i = Math.floor(t[k] / 9);
        const j = t[k] % 9;
        for (let v = 0; v < 9; ++v) {
            if (!row[i][v] && !col[j][v] && !block[Math.floor(i / 3)][Math.floor(j / 3)][v]) {
                row[i][v] = true;
                col[j][v] = true;
                block[Math.floor(i / 3)][Math.floor(j / 3)][v] = true;
                board[i][j] = String.fromCharCode(v + '1'.charCodeAt(0));
                dfs(k + 1);
                row[i][v] = false;
                col[j][v] = false;
                block[Math.floor(i / 3)][Math.floor(j / 3)][v] = false;
            }
            if (ok) {
                return;
            }
        }
    };

    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] === '.') {
                t.push(i * 9 + j);
            } else {
                const v = board[i][j].charCodeAt(0) - '1'.charCodeAt(0);
                row[i][v] = true;
                col[j][v] = true;
                block[Math.floor(i / 3)][Math.floor(j / 3)][v] = true;
            }
        }
    }
    dfs(0);
};

