var rotate = function(matrix) {
    let [n, m] = [matrix.length, matrix[0].length];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<m;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i=0;i<n;i++){
        let [left, right] = [0, m-1];
        while(left < right){
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }
};
