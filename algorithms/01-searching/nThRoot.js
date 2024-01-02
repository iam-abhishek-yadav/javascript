class Solution {
    static func(mid, n, m) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * mid;
            if (ans > m) return 2;
        }
        if (ans === m) return 1;
        return 0;
    }
  
    static NthRoot(n, m) {
        let low = 1, high = m;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let midN = Solution.func(mid, n, m);
            if (midN === 1) {
                return mid;
            } else if (midN === 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
  }
  
  let result = Solution.NthRoot(4, 256);
  console.log("4th root of 256:", result);
  