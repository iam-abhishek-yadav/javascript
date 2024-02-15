var removeStars = function(s) {
    const stack = [];
    for(const char of s){
        if(char === '*'){
            if(stack.length > 0) stack.pop();
        } else stack.push(char);
    }
    return stack.join('');
};
