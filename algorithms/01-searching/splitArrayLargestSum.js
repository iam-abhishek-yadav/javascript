// Q-410 in leetcode

var splitArray = function(nums, k) {
    let low = Math.max(...nums);
    let high = nums.reduce((total, num) => total + num, 0);
  
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let number = count(nums, mid);
  
        if (number > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
  
    return low;
  };
  
  var count = function(nums, mid) {
    let curr = 0, cnt = 1;
  
    for (const num of nums) {
        if (curr + num <= mid) {
            curr += num;
        } else {
            curr = num;
            cnt++;
        }
    }
  
    return cnt;
  };
  
  const numsExample = [7, 2, 5, 10, 8];
  const kExample = 2;
  const resultExample = splitArray(numsExample, kExample);
  console.log(resultExample);
  