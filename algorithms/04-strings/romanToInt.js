// Q-13 in leetcode

var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s.charAt(i);
        const currValue = romanMap[c];
        if (currValue >= prevValue) result += currValue;
        else result -= currValue;
        prevValue = currValue;
    }

    return result;
};

let result = romanToInt("MCMXCIV");
console.log(result);