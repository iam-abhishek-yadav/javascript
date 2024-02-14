var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);
    let [left, right, count] = [0, nums.length - 1, 0];
    while(left < right){
        const sum = nums[left] + nums[right];
        if(sum === k){
            count ++;
            left++;
            right--;
        } else if (sum < k) left++;
        else right--;
    }
    return count;
};
