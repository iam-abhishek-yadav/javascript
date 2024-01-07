// Q-1901 in leetcode

var findPeakGrid = function(mat) {
    let [m, n] = [0, mat.length - 1];
  
    while (m < n) {
        const mid = Math.floor((m + n) / 2);
        const j = mat[mid].indexOf(Math.max(...mat[mid]));
  
        if (mat[mid][j] > mat[mid + 1][j]) {
            n = mid;
        } else {
            m = mid + 1;
        }
    }
  
    return [m, mat[m].indexOf(Math.max(...mat[m]))];
  };
  
  let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  
  let peakIndices = findPeakGrid(matrix);
  
  console.log("Peak Element Indices:", peakIndices);
  