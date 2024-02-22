var guessNumber = function(n) {
    let [low, high] = [0, n-1];
    while(low <= high){
        const mid  = Math.floor((low+high)/2)
        if(guess(mid) === 0) return mid;
        if(guess(mid) === 1) low = mid+1;
        else high = mid-1;
    }
    return low;
};
