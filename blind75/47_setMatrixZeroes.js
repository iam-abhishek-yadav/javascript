var setZeroes = function(matrix) {
    let [n, m, flag] = [matrix.length, matrix[0].length, 1];
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                if(j !== 0) matrix[0][j] = 0;
                else flag = 0;
            } 
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            matrix[i][j] = (matrix[i][0] === 0 || matrix[0][j] === 0) ? 0 : matrix[i][j]
        }
    }
    if(matrix[0][0] === 0) for(let i=0;i<m;i++) matrix[0][i] = 0
    if(flag === 0) for(let i=0;i<n;i++) matrix[i][0] = 0
};
