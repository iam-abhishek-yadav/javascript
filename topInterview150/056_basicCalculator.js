var calculate = function(s) {
    const [stk, n] = [[], s.length];
    let [sign, ans] = [1, 0];

    for (let i = 0; i < n; ++i) {
        if (s[i] === ' ') continue;

        if (s[i] === '+') sign = 1;
        else if (s[i] === '-') sign = -1;
        else if (s[i] === '(') {
            stk.push(ans);
            stk.push(sign);
            ans = 0;
            sign = 1;
        } else if (s[i] === ')') {
            ans *= stk.pop();
            ans += stk.pop();
        } else {
            let x = 0;
            let j = i;
            for (; j < n && !isNaN(Number(s[j])) && s[j] !== ' '; ++j) {
                x = x * 10 + (s[j].charCodeAt(0) - '0'.charCodeAt(0));
            }
            ans += sign * x;
            i = j - 1;
        }
    }

    return ans;

};
