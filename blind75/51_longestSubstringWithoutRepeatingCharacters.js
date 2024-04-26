var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let [left, max] = [0,  0];
    for(let i=0;i<s.length;i++){
        const char = s[i];
        while(set.has(char)){
            const ch = s[left];
            set.delete(ch);
            left++;
        }
        set.add(char);
        max = Math.max(max, i - left + 1);
    }
    return max;
};
