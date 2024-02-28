var rotate = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = m - 1;

        while (left < right) {
            let temp = matrix[i][left];
            matrix[i][left++] = matrix[i][right];
            matrix[i][right--] = temp;
        }
    }
};
