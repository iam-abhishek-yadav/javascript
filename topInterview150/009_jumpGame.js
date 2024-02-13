var canJump = function(nums) {
    let jump = nums[0];
    for(let i=1;i<nums.length;i++){
        if(jump === 0) return false;
        jump--;
        jump = Math.max(jump, nums[i]);
    }
    return true;
};
