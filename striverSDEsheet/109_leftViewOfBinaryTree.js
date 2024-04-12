class Solution {
    leftView(root) {
        const res = [];
        const queue = [root];
        while(queue.length){
            const level = queue.length;
            for(let i=0;i<level;i++){
                const node = queue.shift();
                if(i === 0) res.push(node.data);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        return res;
    }
}
