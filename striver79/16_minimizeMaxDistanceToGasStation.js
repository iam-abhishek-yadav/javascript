function MinimiseMaxDistance(arr, K) {
    let n = arr.length;
    let low = 0, high = 0;
    for (let i = 0; i < n - 1; i++) {
        high = Math.max(high, arr[i + 1] - arr[i]);
    }
    let diff = 1e-6;
    while (high - low > diff) {
        let mid = low + (high - low) / 2.0;
        if (number(arr, mid) > K) low = mid;
        else high = mid;
    }
    return high;
}

function number(arr, mid) {
    let cnt = 0, n = arr.length;
    for (let i = 1; i < n; i++) {
        let dist = Math.floor((arr[i] - arr[i - 1]) / mid);
        if (arr[i] - arr[i - 1] === dist * mid) dist--;
        cnt += dist;
    }
    return cnt;
}

