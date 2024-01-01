function count(arr, n, x) {
    var ans = [-1, -1];
    var low = 0, high = n - 1;
  
    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    ans[0] = (low < n && arr[low] == x) ? low : -1;
  
    low = 0;
    high = n - 1;
  
    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    ans[1] = (high >= 0 && arr[high] == x) ? high : -1;
  
    return ans[0] !== -1 ? ans[1] - ans[0] + 1 : 0;
  }
  
  var arr = [2, 3, 3, 3, 5, 5, 7, 8, 8, 10];
  var n = arr.length;
  var x = 5;
  
  var result = count(arr, n, x);
  console.log("Result:", result);
  