var MyStack = function() {
    this.q = [];
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
    let n = this.q.length;
    while (n-- > 1) {
        this.q.push(this.q.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.q.shift();
};

MyStack.prototype.top = function() {
    return this.q[0];
};

MyStack.prototype.empty = function() {
    return this.q.length === 0;
};
