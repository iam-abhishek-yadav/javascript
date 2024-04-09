var isValid = function(s) {
    const stack = [];
    for(const char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
            continue;
        }
        const top = stack.pop();
        if((char === ')' && top === '(') || (char === '}' && top == '{') || (char === ']' && top === '[')) continue;
        else return false; 
    }
    return stack.length === 0;
};
