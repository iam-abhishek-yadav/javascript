// Q-74 in leetcode

var searchMatrix = function(matrix, target) {
    let [m, n] = [matrix.length, matrix[0].length];
    let [low, high] = [0, m * n - 1];
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
  
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
  
    return false;
  };
  
  let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  
  let target = 3;
  let result = searchMatrix(matrix, target);
  console.log(result);
  