function getLongestSubarray(a, k) {
    const n = a.length;
  
    const map = new Map();
    let [sum, max] = [0, 0];
  
    for (let i = 0; i < n; i++) {
        sum += a[i];
  
        if (sum === k) {
            max = Math.max(max, i + 1);
        }
  
        if (map.has(sum - k)) {
            max = Math.max(max, i - map.get(sum - k));
        }
  
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
  
    return max;
  }
  
  const [a, k] = [[-1, 2, 3, -4, 2, 2], 3];
  console.log(getLongestSubarray(a, k)); // Output: 4
  