class Solution {
    shortest_distance(matrix) {
        const n = matrix.length;
        const m = matrix[0].length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] === -1) {
                    matrix[i][j] = Number.MAX_SAFE_INTEGER;
                }
                if (i === j) {
                    matrix[i][j] = 0;
                }
            }
        }

        for (let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] === Number.MAX_SAFE_INTEGER) {
                    matrix[i][j] = -1;
                }
            }
        }
    }
}

