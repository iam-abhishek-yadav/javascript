var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const [ans, temp] = [[], []];
    const backtrack = (i, s) => {
        if(s === 0){
            ans.push([...temp]);
            return;
        }
        if(i >= candidates.length || s < candidates[i]) return;
        backtrack(i+1, s);
        temp.push(candidates[i]);
        backtrack(i, s - candidates[i]);
        temp.pop();
    }
    backtrack(0, target);
    return ans;
};
