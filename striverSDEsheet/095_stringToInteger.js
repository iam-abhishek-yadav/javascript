var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    const helper = (s, i, sign, result) => {
        if (i === s.length || !/\d/.test(s[i])) {
            return result * sign;
        }
        
        const digit = Number(s[i]);
        if (result > (INT_MAX - digit) / 10) {
            return (sign === 1) ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        return helper(s, i + 1, sign, result);
    };

    let i = 0;
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        return helper(s, i + 1, (s[i] === '-') ? -1 : 1, 0);
    }

    return helper(s, i, 1, 0);
};
