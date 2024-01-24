var filter = function(arr, fn) {
    const result = []
    arr.forEach((num, index) => {
        if(fn(num, index)) result.push(num);
    })
    return result;
};
