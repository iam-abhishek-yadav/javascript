function maximumOnesRow(matrix) {
    let cnt_max = 0;
    let index = -1;
  
    for (let i = 0; i < matrix.length; i++) {
        let cnt_ones = matrix[i].length - find(matrix[i]);
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
  
    return index;
  }
  
  function find(list) {
    let low = 0, high = list.length - 1, ans = -1;
  
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (list[mid] === 1) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
  
    return ans === -1 ? list.length : ans;
  }
  
  let matrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1]
  ];
  
  let result = maximumOnesRow(matrix);
  console.log("Row with maximum ones:", result);
  