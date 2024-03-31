function numberOfInversions(a) {
    return mergeSort(a, 0, a.length - 1);
}

function mergeSort(arr, low, high) {
    let cnt = 0;

    if (low >= high) {
        return cnt;
    }

    const mid = low + Math.floor((high - low) / 2);

    cnt += mergeSort(arr, low, mid);
    cnt += mergeSort(arr, mid + 1, high);
    cnt += merge(arr, low, mid, high);

    return cnt;
}

function merge(arr, low, mid, high) {
    const temp = [];
    let left = low;
    let right = mid + 1;
    let cnt = 0;

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
