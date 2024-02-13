var removeElement = function(nums, val) {
    let [count, idx] = [0, 0];
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            count++;
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            idx++;
        }
    }
    return idx;
};
