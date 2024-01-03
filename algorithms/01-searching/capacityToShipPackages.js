// Q-1011 in leetcode

var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce((total, weight) => total + weight, 0);
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let [count, currWeight] = [1, 0];
  
        for (const weight of weights) {
            if (currWeight + weight > mid) {
                count++;
                currWeight = 0;
            }
            currWeight += weight;
        }
  
        if (count <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
  
    return low;
  };
  
  const weightsExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const daysExample = 5;
  
  const resultExample = shipWithinDays(weightsExample, daysExample);
  
  console.log(`The minimum capacity of the ship is: ${resultExample}`);
  