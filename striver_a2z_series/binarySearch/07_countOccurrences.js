function count(arr, n, x) {
    let ans = [-1, -1];
    let low = 0, high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) high = mid - 1;
        else low = mid + 1;
    }
    ans[0] = (low < n && arr[low] === x) ? low : -1;

    low = 0;
    high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= x) low = mid + 1;
        else high = mid - 1;
    }
    ans[1] = (high >= 0 && arr[high] === x) ? high : -1;

    return ans[0] !== -1 ? ans[1] - ans[0] + 1 : 0;
}

