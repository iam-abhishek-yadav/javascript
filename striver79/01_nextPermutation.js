var nextPermutation = function(nums) {
    let index = -1;
    const reverse = (nums, left, right) => {
        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i] < nums[i+1]){
            index = i;
            break;
        }
    }
    if(index === -1){
        reverse(nums, 0, nums.length-1);
    } else {
        for(let i=nums.length-1;i>=index;i--){
            if(nums[i] > nums[index]){
                [nums[i], nums[index]] = [nums[index], nums[i]];
                break;
            }
        }
        reverse(nums, index + 1, nums.length-1);
    }
};
