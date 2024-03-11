var longestPalindrome = function(s) {
    let [max, start] = [0, 0];
    const expand = (s, left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i=0;i<s.length;i++){
        let single = expand(s, i, i);
        let double = expand(s, i, i+1);
        let curr = Math.max(single, double);
        if(curr > max){
            max = curr;
            start = i - ((curr - 1) >> 1);
        }
    }
    return s.slice(start, start + max);
};

