var reverseWords = function(s) {
    const arr = s.trim().split(/\s+/);
    let [left, right] = [0, arr.length-1];
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join(" ");
};
