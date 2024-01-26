var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((res, rej) => {
                setTimeout(() => rej("Time Limit Exceeded"), t);
            })
        ])
    }
};
