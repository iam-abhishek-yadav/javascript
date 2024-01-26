var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const ans = new Array(functions.length);
        for(let i=0;i<functions.length;i++){
            const f = functions[i];
            f()
                .then(res => {
                    ans[i] = res;
                    count++;
                    if(count === functions.length) resolve(ans);
                })
                .catch(err => {
                    reject(err);
                })
        }
    })
};
