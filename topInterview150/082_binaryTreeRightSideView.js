var rightSideView = function(root) {
    const [res, queue] = [[], []];
    if(root === null) return res;
    queue.push(root);
    while(queue.length > 0){
        const level = queue.length;
        for(let i=0;i<level;i++){
            const node = queue.shift();
            if(i === level-1) res.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return res;
};
