var ladderLength = function(beginWord, endWord, wordList) {
    const words = new Set(wordList), queue = [beginWord];
    let ans = 1;
    while (queue.length) {
        ans++;
        const queueSize = queue.length;
        for (let i = 0; i < queueSize; i++) {
            let s = queue.shift();
            s = s.split('');
            for (let i = 0; i < s.length; i++) {
                const ch = s[i];
                for (let j = 0; j < 26; j++) {
                    s[i] = String.fromCharCode('a'.charCodeAt(0) + j);
                    const t = s.join('');
                    if (!words.has(t)) continue;
                    if (t === endWord) return ans;
                    queue.push(t);
                    words.delete(t);
                }
                s[i] = ch;
            }
        }
    }
    return 0;
};
