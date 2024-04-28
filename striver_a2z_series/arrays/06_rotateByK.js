function rotateArray(arr, k) {
    rotate(arr, 0, k - 1);
    rotate(arr, k, arr.length - 1);
    rotate(arr, 0, arr.length - 1);
    return arr;
}

function rotate(arr, low, high) {
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
}

