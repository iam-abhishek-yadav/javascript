class Solution {
    static lowerBound(arr, n, x) {
        let low = 0, high = n - 1, ans = n;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (arr[mid] >= x) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
  }
  
  let arr = [1, 2, 2, 3, 3, 5];
  let n = arr.length;
  let x = 0;
  let result = Solution.lowerBound(arr, n, x);
  console.log(result);
  