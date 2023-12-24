function longestSubarrayWithSumK(a, k) {
    let [left, right, max, sum] = [0, 0, 0, 0];
  
    while (right < a.length) {
        sum += a[right++];
        while (sum > k) sum -= a[left++];
        max = Math.max(max, right - left);
    }
  
    return max;
  }
  
  const [a, k] = [[1, 2, 3, 4, 5, 1, 2 ,3], 9];
  console.log(longestSubarrayWithSumK(a, k)); // Output: 3
  