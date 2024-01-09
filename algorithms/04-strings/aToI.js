// Q-8 in leetcode

var myAtoi = function(s) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
  
    let i = 0;
    let sign = 1;
    let result = 0;
  
    while (s[i] === ' ') {
        i++;
    }
  
    if (s[i] === '-' || s[i] === '+') {
        sign = (s[i++] === '-') ? -1 : 1;
    }
  
    while (i < s.length && /\d/.test(s[i])) {
        const digit = Number(s[i]);
  
        if (result > (INT_MAX - digit) / 10) {
            return (sign === 1) ? INT_MAX : INT_MIN;
        }
  
        result = result * 10 + digit;
        i++;
    }
  
    return result * sign;
  };
  
  console.log(myAtoi("42")); // Output: 42
  console.log(myAtoi("   -42")); // Output: -42
  console.log(myAtoi("4193 with words")); // Output: 4193
  console.log(myAtoi("words and 987")); // Output: 0
  console.log(myAtoi("-91283472332")); // Output: -2147483648
  