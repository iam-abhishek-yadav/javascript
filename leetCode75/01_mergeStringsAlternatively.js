/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let [left, right, str] = [0, 0, ""];
    while(left < word1.length && right < word2.length){
        str += word1[left++];
        str += word2[right++];
    }
    while(left < word1.length) str += word1[left++];
    while(right < word2.length) str += word2[right++];

    return str;
};


