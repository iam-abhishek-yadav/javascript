var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
  
    for (const num of set) {
        if (!set.has(num - 1)) {
            let x = num;
            let curr = 1;
  
            while (set.has(x + 1)) {
                x++;
                curr++;
            }
  
            max = Math.max(max, curr);
        }
    }
  
    return max;
  };
  
  const nums = [100, 4, 200, 1, 3, 2];
  const result = longestConsecutive(nums);
  
  console.log("Input Array:", nums);
  console.log("Longest Consecutive Sequence Length:", result);
  