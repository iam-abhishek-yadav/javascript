var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let minPrev = matrix[i - 1][j];
            if (j > 0) {
                minPrev = Math.min(minPrev, matrix[i - 1][j - 1]);
            }
            if (j < n - 1) {
                minPrev = Math.min(minPrev, matrix[i - 1][j + 1]);
            }
            
            matrix[i][j] += minPrev;
        }
    }
    
    return Math.min(...matrix[n - 1]);
};
