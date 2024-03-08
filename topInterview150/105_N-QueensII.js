var totalNQueens = function(n) {
    const cols = new Array(n).fill(false);
    const diag = new Array(2*n).fill(false);
    const antiDiag = new Array(2*n).fill(false);
    let ans = 0;
    const backtrack = (i) => {
        if(i === n){
            ans++;
            return;
        }
        for(let j=0;j<n;j++){
            const [a, b] = [i+j, i-j+n];
            if(cols[j] || diag[a] || antiDiag[b]) continue;
            cols[j] = diag[a] = antiDiag[b] = true;
            backtrack(i+1);
            cols[j] = diag[a] = antiDiag[b] = false;
        }
    }
    backtrack(0);
    return ans;
};
