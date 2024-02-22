var combinationSum3 = function(k, n) {
    const result = [];
    const backtrack = (start, k, n, curr) => {
        if(n === 0 && k === 0){
            result.push([...curr]);
            return;
        }
        for(let i=start; i<=9; i++){
            curr.push(i);
            backtrack(i+1, k-1, n-i, curr);
            curr.pop(i);
        }
    }
    backtrack(1, k, n , []);
    return result;
};
