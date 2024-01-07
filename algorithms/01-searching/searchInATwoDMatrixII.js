// Q-240 in leetcode

var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length
    let row = 0, col = m - 1;
    while (row < n && col >= 0) {
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
  };
  
  
  let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  
  let target1 = 3;
  let target2 = 13;
  
  console.log(searchMatrix(matrix, target1));
  console.log(searchMatrix(matrix, target2));
  