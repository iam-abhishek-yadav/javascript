var characterReplacement = function(s, k) {
    let counter = new Array(26).fill(0);
    let i = 0, j = 0, maxCnt = 0;
    for (; i < s.length; ++i) {
        let c = s.charCodeAt(i) - 'A'.charCodeAt(0);
        ++counter[c];
        maxCnt = Math.max(maxCnt, counter[c]);
        if (i - j + 1 - maxCnt > k) {
            --counter[s.charCodeAt(j) - 'A'.charCodeAt(0)];
            ++j;
        }
    }
    return i - j;
};
