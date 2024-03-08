var generateParenthesis = function(n) {
    const ans = [];
    const backtrack = (left, right, t) => {
        if(left > n || right > n || left < right) return;
        if(left === n && right === n){
            ans.push(t);
            return;
        }
        backtrack(left + 1, right, t + '(');
        backtrack(left, right + 1, t + ')');
    }
    backtrack(0, 0, '');
    return ans;
};
