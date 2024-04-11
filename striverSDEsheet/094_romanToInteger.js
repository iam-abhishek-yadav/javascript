var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let [int, prev] = [0, 0];
    for(let i=s.length-1;i>=0;i--){
        let curr = romanNumerals[s[i]];
        if(prev > curr) int -= curr;
        else int += curr;
        prev = curr;
    }
    return int;
};
