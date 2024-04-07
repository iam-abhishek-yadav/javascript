var permute = function(nums) {
    const [n, res, temp] = [nums.length, [], []];
    const visited = new Array(n).fill(false);
    const backtrack = (i) => {
        if(i >= n){
            res.push([...temp]);
            return;
        }
        for(let j=0;j<n;j++){
            if(!visited[j]){
                visited[j] = true;
                temp.push(nums[j]);
                backtrack(i+1);
                visited[j] = false;
                temp.pop();
            }
        }
    }
    backtrack(0);
    return res;
};
