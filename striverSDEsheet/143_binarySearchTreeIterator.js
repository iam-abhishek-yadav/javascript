var BSTIterator = function(root) {
    this.stack = [];
    while(root !== null){
        this.stack.push(root);
        root = root.left;
    }
};

BSTIterator.prototype.next = function() {
    let curr = this.stack.pop();
    let node = curr.right;
    while(node !== null){
        this.stack.push(node);
        node = node.left;
    }
    return curr.val;
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};
