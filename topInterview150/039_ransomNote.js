var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    for(const char of magazine){
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(const char of ransomNote){
        if(!map.get(char) || map.get(char) === 0) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
};
