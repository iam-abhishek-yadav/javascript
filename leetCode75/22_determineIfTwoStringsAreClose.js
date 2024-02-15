var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const count1 = new Map();
    const count2 = new Map();

    for (let i = 0; i < word1.length; i++) {
        const char1 = word1[i];
        const char2 = word2[i];

        count1.set(char1, (count1.get(char1) || 0) + 1);
        count2.set(char2, (count2.get(char2) || 0) + 1);
    }

    const sortedCount1 = Array.from(count1.values()).sort((a, b) => a - b).join(',');
    const sortedCount2 = Array.from(count2.values()).sort((a, b) => a - b).join(',');

    return sortedCount1 === sortedCount2 && [...count1.keys()].sort().join('') === [...count2.keys()].sort().join('');
};

