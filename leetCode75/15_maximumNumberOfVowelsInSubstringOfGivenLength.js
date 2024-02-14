var maxVowels = function(s, k) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    count = 0;
    for(let i=0;i<k;i++){
        if(set.has(s[i])) count++;
    }
    let max = count;
    for(let i=k;i<s.length;i++){
        if(set.has(s[i-k])) count--;
        if(set.has(s[i])) count++;
        max = Math.max(max, count);
    }
    return max;
};
