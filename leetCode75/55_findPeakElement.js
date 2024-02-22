var findPeakElement = function(nums) {
    let [n, low, high] = [nums.length, 1, nums.length-2]
    if(n === 1 || nums[0] > nums[1]) return 0
    if(nums[n-1] > nums[n-2]) return n-1
    while(low <= high){
        let mid = Math.floor((high+low)/2)
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid
        if(nums[mid] > nums[mid-1]) low = mid+1
        else high = mid-1
    }
    return -1
};
