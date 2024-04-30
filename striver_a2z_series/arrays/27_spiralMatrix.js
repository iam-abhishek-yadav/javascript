var spiralOrder = function(matrix) {
    const res = [];
    let [left, right, top, bottom] = [0, matrix[0].length-1, 0, matrix.length-1];
    while(left <= right && top <= bottom){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right]);
        }
        right--;
        if(top <= bottom){
            for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left <= right){
            for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
};
