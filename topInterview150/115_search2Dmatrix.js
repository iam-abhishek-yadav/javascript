var searchMatrix = function(matrix, target) {
    let [m, n] = [matrix.length, matrix[0].length];
    let [left, right] = [0, m*n-1];
    while(left <= right){
        let mid = (left + right) >> 1;
        let row = Math.floor(mid / n), col = mid % n;
        if(matrix[row][col] === target) return true;
        if(matrix[row][col] > target) right = mid-1;
        else left = mid+1;
    }
    return false;
};
