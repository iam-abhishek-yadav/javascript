class Solution {
    solve(i, j, n, moves, l, m, maze) {
        if (i === n - 1 && j === n - 1) {
            l.push(moves);
            return;
        }
        if (i + 1 < n && maze[i + 1][j] === 0 && m[i + 1][j] === 1) {
            maze[i][j] = 1;
            this.solve(i + 1, j, n, moves + 'D', l, m, maze);
            maze[i][j] = 0;
        }
        if (j - 1 >= 0 && maze[i][j - 1] === 0 && m[i][j - 1] === 1) {
            maze[i][j] = 1;
            this.solve(i, j - 1, n, moves + 'L', l, m, maze);
            maze[i][j] = 0;
        }
        if (j + 1 < n && maze[i][j + 1] === 0 && m[i][j + 1] === 1) {
            maze[i][j] = 1;
            this.solve(i, j + 1, n, moves + 'R', l, m, maze);
            maze[i][j] = 0;
        }
        if (i - 1 >= 0 && maze[i - 1][j] === 0 && m[i - 1][j] === 1) {
            maze[i][j] = 1;
            this.solve(i - 1, j, n, moves + 'U', l, m, maze);
            maze[i][j] = 0;
        }
    }

    findPath(m, n) {
        const l = [];
        const maze = new Array(n).fill(0).map(() => new Array(n).fill(0));
        if (m[0][0] === 1) {
            this.solve(0, 0, n, "", l, m, maze);
        }
        return l;
    }
}
