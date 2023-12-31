class Solution {
    static upperBound = function (arr, x, n) {
        let low = 0, high = n - 1, ans = n;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (arr[mid] > x) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    };
  }
  
  const arr = [1, 2, 2, 3, 3, 5];
  const x = 2;
  const n = arr.length;
  const result = Solution.upperBound(arr, x, n);
  console.log(result);
  