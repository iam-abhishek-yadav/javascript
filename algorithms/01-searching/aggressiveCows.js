function aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);
    let low = 0,
      high = stalls[stalls.length - 1] - stalls[0];
  
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (place(stalls, k, mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return high;
  }
  
  function place(arr, cows, currDiff) {
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
  
  const stalls = [1, 2, 4, 8, 9];
  const k = 3;
  const result = aggressiveCows(stalls, k);
  console.log(result);
  