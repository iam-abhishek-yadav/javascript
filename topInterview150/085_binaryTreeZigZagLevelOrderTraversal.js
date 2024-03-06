var zigzagLevelOrder = function(root) {
    const [res, queue] = [[], []];
    if(root === null) return res;
    let dir = -1;
    queue.push(root);
    while(queue.length > 0){
        const level = queue.length, temp = [];
        dir = -dir;
        for(let i=0;i<level;i++){
            const node = queue.shift();
            if(dir === 1) temp.push(node.val);
            else temp.unshift(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
};

