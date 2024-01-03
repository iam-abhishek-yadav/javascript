// Q-875 in leetcode

var minEatingSpeed = function(piles, h) {
    let low = 1, high = Math.max(...piles), result = -1;
  
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const hoursNeeded = piles.reduce((total, pile) => total + Math.ceil(pile / mid), 0);
  
        if (hoursNeeded <= h) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
  
    return result;
  };
  
  let pilesJS = [3, 6, 7, 11];
  let hJS = 8;
  let resultJS = minEatingSpeed(pilesJS, hJS);
  console.log(resultJS); // Output: 4
  