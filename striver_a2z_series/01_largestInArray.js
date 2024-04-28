const largestElement = (arr, n) {
    let max = -1;
    for(const num of arr) max = Math.max(max, num);
    return max;
}
