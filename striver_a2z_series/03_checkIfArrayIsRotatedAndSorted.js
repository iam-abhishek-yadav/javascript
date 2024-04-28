var check = function(nums) {
   let cnt = 0;
   for(let i=1;i<nums.length;i++){
    if(nums[i] < nums[i-1]) cnt++;
   } 
   if((cnt === 1 && nums[nums.length-1] <= nums[0]) || (cnt === 0)) return true;
   return false;
};
