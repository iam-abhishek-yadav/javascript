var singleNonDuplicate = function(nums) {
    let [low, high] = [0, nums.length-1]
    if(nums.length == 1 || nums[0] !== nums[1]) return nums[0]
    if(nums[nums.length-1] !== nums[nums.length-2]) return nums[nums.length-1]
    while(low <= high){
        let mid = Math.floor((high+low)/2)
        if(nums[mid-1] !== nums[mid] && nums[mid+1] !== nums[mid]) return nums[mid]
        if( (mid%2 === 0 && nums[mid] === nums[mid+1]) || (mid%2 !== 0 && nums[mid] === nums[mid-1]) ) low = mid+1
        else high = mid-1
    }
    return -1
};
