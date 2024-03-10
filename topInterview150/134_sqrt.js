var mySqrt = function(x) {
    let [left, right] = [0, x];
    while(left < right){
        let mid = (left + right + 1) >> 1;
        if(mid > x / mid) right = mid-1;
        else left = mid;
    }
    return left;
};
