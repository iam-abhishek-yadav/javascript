var evalRPN = function(tokens) {
    const stack = [];
    for(const char of tokens){
        if(char === '+' || char === '-' || char === '*' || char === '/') {
            const [num1, num2] = [stack.pop(), stack.pop()];
            if(char === '+') stack.push(num1+num2);
            if(char === '-') stack.push(num2-num1);
            if(char === '*') stack.push(num1*num2);
            if(char === '/') stack.push(Math.trunc(num2/num1));
        } else {
            stack.push(Number(char));
        }
    }
    return stack.pop();
};
