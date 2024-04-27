var MedianFinder = function () {
    this.arr = [];
};
MedianFinder.prototype.addNum = function (num) {
    let left = 0;
    let right = this.arr.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (num > this.arr[mid]) left = mid + 1;
        else right = mid;
    }
    this.arr.splice(left, 0, num);
};
MedianFinder.prototype.findMedian = function () {
    let mid = this.arr.length >> 1;
    return this.arr.length & 1 ? this.arr[mid] : (this.arr[mid - 1] + this.arr[mid]) / 2;
};
