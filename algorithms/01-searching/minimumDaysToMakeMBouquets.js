// Q-1482 in leetcode

var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
  
    let low = 1;
    let high = Math.max(...bloomDay);
  
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
  
        let bouquets = 0;
        let flowers = 0;
  
        for (let bloom of bloomDay) {
            if (bloom <= mid) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
  
        if (bouquets >= m) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
  
    return low;
  };
  
  let bloomDay = [1, 10, 3, 10, 2];
  let m = 3;
  let k = 1;
  let result = minDays(bloomDay, m, k);
  console.log(result);
  