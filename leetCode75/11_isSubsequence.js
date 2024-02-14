var isSubsequence = function(s, t) {
    const [m, n] = [s.length, t.length];
    let [i, j] = [0, 0];
    while(i < m && j < n){
        if(s[i] === t[j]) i++;
        j++;
    }
    return i === m;
};

