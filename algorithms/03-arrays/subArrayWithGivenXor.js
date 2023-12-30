function subarraysWithSumK(a, b) {
    let xor = 0;
    let cnt = 0;
    const map = new Map();
    map.set(xor, 1);
  
    for (const num of a) {
        xor ^= num;
        const x = xor ^ b;
  
        if (map.has(x)) {
            cnt += map.get(x);
        }
  
        map.set(xor, (map.get(xor) || 0) + 1);
    }
  
    return cnt;
  }
  
  const array = [1, 2, 3, 4, 5];
  const targetSum = 3;
  
  const result = subarraysWithSumK(array, targetSum);
  console.log("Number of subarrays with XOR equal to", targetSum, "is:", result);
  