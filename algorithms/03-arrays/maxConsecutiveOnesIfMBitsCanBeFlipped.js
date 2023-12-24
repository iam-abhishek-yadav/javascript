function traffic(n, m, vehicle) {
    let left = 0;
    let max = 0;
    let countZeroes = 0;
  
    for (let right = 0; right < n; right++) {
        if (vehicle[right] === 0) {
            countZeroes++;
        }
  
        while (countZeroes > m) {
            if (vehicle[left++] === 0) {
                countZeroes--;
            }
        }
  
        max = Math.max(max, right - left + 1);
    }
  
    return max;
  }
  
const n = 8;
const m = 2;
const vehicle = [1, 0, 0, 1, 1, 0, 1, 1];
console.log(traffic(n, m, vehicle)); // Output: 6
  