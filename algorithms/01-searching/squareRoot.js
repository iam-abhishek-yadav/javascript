class Solution {
    static sqrtN(N) {
        let low = 1, high = N, ans = 0;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (mid * mid <= N) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return Math.floor(ans);
    }
  }
  
  let result = Solution.sqrtN(2323);
  console.log("Square root of 2323:", result);
  