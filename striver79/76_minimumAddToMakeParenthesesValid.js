var minAddToMakeValid = function(s) {
    const stk = [];
    for (const c of s) {
        if (c === ')' && stk.length > 0 && stk[stk.length - 1] === '(') {
            stk.pop();
        } else {
            stk.push(c);
        }
    }
    return stk.length;
};
