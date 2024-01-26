var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cache.has(key) && this.cache.get(key).expirationTime > Date.now()){
        this.cache.set(key, {value, expirationTime: Date.now() + duration});
        return true;
    }
    this.cache.set(key, {value, expirationTime: Date.now() + duration});
    return false;
};

TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key) && this.cache.get(key).expirationTime > Date.now()){
        return this.cache.get(key).value;
    }
    return -1;
};

TimeLimitedCache.prototype.count = function() {
    return [...this.cache.values()].filter(t => t.expirationTime > Date.now()).length;
};
