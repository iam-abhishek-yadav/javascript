var connect = function(root) {
    if(!root) return null;
    const queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const level = queue.length;
        for(let i=0;i<level;i++){
            let node = queue.shift();
            if(i === level-1) node.next = null;
            else {
                node.next = queue[0];
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return root;
};
