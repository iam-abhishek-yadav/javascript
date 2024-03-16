class Solution {
    solve(n, k, stalls) {
        stalls.sort((a, b) => a - b);
        let low = 0,
          high = stalls[n - 1] - stalls[0];
      
        while (low <= high) {
          const mid = low + Math.floor((high - low) / 2);
          if (this.place(stalls, k, mid)) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
      
        return high;
    }
    place(arr, cows, currDiff) {
        let cow = 1;
        let curr = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] - curr >= currDiff) {
            cow++;
            curr = arr[i];
          }
        }
        
        return cows <= cow;
    }
}
