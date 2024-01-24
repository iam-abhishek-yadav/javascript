var map = function(arr, fn) {
    arr.forEach((num, index) => {
        arr[index] = fn(num, index);
    });
    return arr;
};
