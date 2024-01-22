var createCounter = function(init) {
    let current = init
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => current = init
    }
};