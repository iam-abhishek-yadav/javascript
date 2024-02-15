var decodeString = function(s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (const char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            const num = stack.pop();
            const prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
};
