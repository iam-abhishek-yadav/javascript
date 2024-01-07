class Solution {
    static MinimiseMaxDistance(arr, K) {
      const n = arr.length;
      let low = 0, high = 0;
  
      for (let i = 0; i < n - 1; i++) {
        high = Math.max(high, arr[i + 1] - arr[i]);
      }
  
      const diff = 1e-6;
  
      while (high - low > diff) {
        const mid = low + (high - low) / 2.0;
        if (Solution.number(arr, mid) > K) {
          low = mid;
        } else {
          high = mid;
        }
      }
  
      return high;
    }
  
    static number(arr, mid) {
      let cnt = 0;
      const n = arr.length;
  
      for (let i = 1; i < n; i++) {
        const dist = parseInt((arr[i] - arr[i - 1]) / mid);
        if (arr[i] - arr[i - 1] === dist * mid) {
          cnt += dist - 1;
        } else {
          cnt += dist;
        }
      }
  
      return cnt;
    }
  }
  
  const arr = [1, 2, 3, 4, 5];
  const K = 4;
  
  const result = Solution.MinimiseMaxDistance(arr, K);
  console.log(result);
  