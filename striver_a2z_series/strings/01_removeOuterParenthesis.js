var removeOuterParentheses = function(s) {
    let result = "", stack = [];
    for(const ch of s){
        if(ch === '('){
            if(stack.length > 0) result += ch;
            stack.push(ch);
        } else {
            stack.pop();
            if(stack.length > 0) result += ch;
        }
    }
    return result;
};
