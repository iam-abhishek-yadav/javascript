var rotate = function(nums, k) {
    k %= nums.length;
    const reverse = (arr, low, high) => {
        while(low < high){
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;high--;
        }
    }
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
};
