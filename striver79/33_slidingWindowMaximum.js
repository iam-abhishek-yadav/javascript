var maxSlidingWindow = function(nums, k) {
    if (nums === null || nums.length === 0) return [];
    const n = nums.length;
    const result = new Array(n - k + 1);
    let resultIndex = 0;
    const deque = [];
    for (let i = 0; i < n; i++) {
        while (deque.length !== 0 && deque[0] < i - k + 1) deque.shift();
        while (deque.length !== 0 && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) {
            result[resultIndex] = nums[deque[0]];
            resultIndex++;
        }
    }
    return result;
};
