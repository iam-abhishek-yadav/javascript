Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (acc[key]) acc[key].push(item);
        else acc[key] = [item];
        return acc;
    }, {})
};
