var findDuplicate = function(nums) {
    let slow = nums[0], fast = nums[0];
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }
    fast = nums[0];
    for (; slow !== fast;) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
