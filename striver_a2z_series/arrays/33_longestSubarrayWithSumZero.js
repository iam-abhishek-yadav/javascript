function getLongestZeroSumSubarrayLength(arr) {
    let max = 0,
        sum = 0;
    let map = new Map();
    map.set(0, -1);
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum)) {
            max = Math.max(max, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    
    return max;
}

