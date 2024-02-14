var RandomizedSet = function() {
    this.set = new Set();
    this.array = [];
};
RandomizedSet.prototype.insert = function(val) {
    if(!this.set.has(val)){
        this.set.add(val);
        this.array.push(val);
        return true;
    }
    return false;
};

RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val);
        const index = this.array.indexOf(val);
        this.array[index] = this.array[this.array.length - 1];
        this.array.pop();
        return true;
    }
    return false;
};
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
};
