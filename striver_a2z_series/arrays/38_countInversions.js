function numberOfInversions(a, n) {
    return mergeSort(a, 0, n - 1);
}

function mergeSort(a, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;
    let mid = Math.floor(low + (high - low) / 2);
    cnt += mergeSort(a, low, mid);
    cnt += mergeSort(a, mid + 1, high);
    cnt += merge(a, low, mid, high);
    return cnt;
}

function merge(arr, low, mid, high) {
    const temp = [];
    let left = low, right = mid + 1, cnt = 0;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            cnt += mid - left + 1;
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return cnt;
}

