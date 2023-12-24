// Q-189 in leetcode

const array = [1, 2, 3, 4, 5];

const rotate = function(nums, k) {
    k = k%nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

const reverse = (arr, left, right) => {
    if (left >= right) return;
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    reverse(arr, left + 1, right - 1);
}

rotate(array, 3);
console.log(array);