var minSubArrayLen = function(target, nums) {
    let [left, right, min, sum] = [0, 0, nums.length + 1, 0];
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left++];
        }
        right++;
    }
    return min === nums.length + 1 ? 0 : min;
};
