function longestSubarrayWithSumK(a, k) {
    let left = 0, right = 0, max = 0;
    let sum = 0;
    
    while (right < a.length) {
        sum += a[right++];
        while (sum > k) {
            sum -= a[left++];
        }
        if (sum === k) max = Math.max(max, right - left);
    }
    
    return max;
}

