// Q-75 in leetcode

var sortColors = function(nums) {
    let [low, mid, high] = [0, 0, nums.length - 1];

    while (mid <= high)
        nums[mid] === 0 ? ([nums[low], nums[mid]] = [nums[mid], nums[low]], mid++, low++)
            : nums[mid] === 1 ? mid++
                : ([nums[mid], nums[high]] = [nums[high], nums[mid]], high--);
};

let colors = [2, 0, 1, 2, 1, 0, 0, 1, 2, 0, 1];

console.log("Before Sorting:", colors);
sortColors(colors);
console.log("After Sorting:", colors);
