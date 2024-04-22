var countBits = function(n) {
    const res = [];
    const hammingWeight = function(n) {
        let count = 0;
        while(n){
            count++;
            n &= (n-1);
        }
        return count;
    };
    for(let i=0;i<=n;i++){
        res.push(hammingWeight(i));
    }
    return res;
};
