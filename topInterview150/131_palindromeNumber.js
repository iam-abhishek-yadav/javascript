var isPalindrome = function(x) {
    const str = '' + x;
    let [left, right] = [0, str.length-1];
    while(left < right){
        if(str[left++] !== str[right--]) return false;
    }
    return true;
};
