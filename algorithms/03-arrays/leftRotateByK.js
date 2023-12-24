const array = [1, 2, 3, 4, 5];

const rotateArray = (arr, k) => {
    k = k%arr.length;
    rotate(arr, 0, k - 1);
    rotate(arr, k, arr.length - 1);
    rotate(arr, 0, arr.length - 1);
    return arr;
}

const rotate = (arr, left, right) => {
    if (left >= right) return;
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    rotate(arr, left + 1, right - 1);
}

rotateArray(array, 3);
console.log(array);