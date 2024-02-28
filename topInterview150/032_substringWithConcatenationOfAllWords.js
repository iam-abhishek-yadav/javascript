var findSubstring = function(s, words) {
    const result = [];
    const wordLen = words[0].length;
    const totalLen = words.length * wordLen;
    const wordCountMap = {};
    
    for (const word of words) {
        wordCountMap[word] = (wordCountMap[word] || 0) + 1;
    }

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let wordSeenMap = {};

        while (right + wordLen <= s.length) {
            const word = s.substr(right, wordLen);
            right += wordLen;

            if (!(word in wordCountMap)) {
                left = right;
                wordSeenMap = {};
            } else {
                wordSeenMap[word] = (wordSeenMap[word] || 0) + 1;

                while (wordSeenMap[word] > wordCountMap[word]) {
                    const leftWord = s.substr(left, wordLen);
                    left += wordLen;
                    wordSeenMap[leftWord]--;
                }

                if (right - left === totalLen) {
                    result.push(left);
                }
            }
        }
    }

    return result;
}
