var asteroidCollision = function(asteroids) {
    const stack = [];
    for(const x of asteroids){
        if(x > 0) stack.push(x);
        else {
            while(stack.length && stack[stack.length-1] > 0 && stack[stack.length-1] < -x) stack.pop();
            if(stack.length && stack[stack.length-1] === -x) stack.pop();
            else if(!stack.length || stack[stack.length-1] < 0) stack.push(x);
        }
    }
    return stack;
};
