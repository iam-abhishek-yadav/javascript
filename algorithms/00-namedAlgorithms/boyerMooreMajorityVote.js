var majorityElement = function(nums) {
  let [cnt, ele] = [0, 0]
  for(const num of nums){
      if(cnt == 0){
          cnt = 1
          ele = num
      } else if (num == ele) cnt++;
      else cnt--
  }
  cnt = 0
  for(let num of nums){
      if(ele === num) cnt++
  }
  return cnt > nums.length/2 ? ele : -1
};

const numsExample = [2, 2, 1, 1, 1, 2, 2];
const resultMajorityElement = majorityElement(numsExample);
console.log("majorityElement Example Result:", resultMajorityElement);
