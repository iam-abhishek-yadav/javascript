var debounce = function(fn, t) {
    let timeoutId;
    return function(...args) {
        if(timeoutId) clearTimeout(timeoutId);
        timeoutId =  setTimeout(() => {
            fn(...args);
            timeoutId = null;
        }, t)
    }
};
