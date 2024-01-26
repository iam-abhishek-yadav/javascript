var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((res, fn) => fn(res), x);
    }
};
