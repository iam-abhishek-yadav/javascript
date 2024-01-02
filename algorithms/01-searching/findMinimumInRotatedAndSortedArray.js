// Q-153 in leetcode

var findMin = function(nums) {
    let [low, high, min] = [0, nums.length-1, Infinity]
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(nums[low] <= nums[high]) return Math.min(min, nums[low])
        if(nums[low] <= nums[mid]){
            min = nums[low]
            low = mid+1
        } else {
            min = nums[mid]
            high = mid-1
        }
    }
    return min
};

let rotatedArray = [4, 5, 6, 7, 0, 1, 2];
let minimumElement = findMin(rotatedArray);
console.log("Minimum element in the rotated array:", minimumElement);
