var sortColors = function(nums) {
    let [low, mid, high] = [0, 0, nums.length-1];
    while(mid <= high){
        if(nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;mid++;
        } else if(nums[mid] === 1) mid++;
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
