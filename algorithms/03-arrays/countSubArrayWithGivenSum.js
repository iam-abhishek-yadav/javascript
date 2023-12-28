// Q-560 in leetcode

var subarraySum = function(nums, k) {
    var map = new Map();
    map.set(0, 1);
    var ans = 0, sum = 0;
  
    for (var num of nums) {
        sum += num;
        ans += map.get(sum - k) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return ans;
  };
  
  var numsExample = [1, 2, 3, 4, 5];
  var kExample = 9;
  
  var result = subarraySum(numsExample, kExample);
  
  console.log("Number of subarrays with sum equal to", kExample, "is:", result);
  