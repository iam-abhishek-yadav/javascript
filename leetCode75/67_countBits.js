var countBits = function(n) {
    const arr = [];
    for(let i=0;i<=n;i++) arr[i] = count(i);
    return arr;
};

var count = function (num) {
    let count = 0;
    while(num > 0){
        if((num & 1) === 1) count++;
        num >>= 1;
    }    
    return count;
}
