var dailyTemperatures = function(temperatures) {
    const [n, stack] = [temperatures.length, []];
    const arr = new Array(n).fill(0);
    for(let i=n-1;i>=0;i--){
        while(stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]) {
            stack.pop();
        }
        if(stack.length) arr[i] = stack[stack.length - 1] - i;
        stack.push(i);
    }
    return arr;
};
