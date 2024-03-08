var combine = function(n, k) {
    const result = [], temp = [];
    const backtrack = (i) => {
        if(temp.length === k){
            result.push([...temp]);
            return;
        }
        if(i > n) return;
        temp.push(i);
        backtrack(i+1);
        temp.pop();
        backtrack(i+1);
    }
    backtrack(1);
    return result;
};
