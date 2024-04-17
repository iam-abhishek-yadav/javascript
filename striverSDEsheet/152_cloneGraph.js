var cloneGraph = function(node) {
    if(!node) return null;
    const visited = new Map();
    visited.set(node, new Node(node.val));
    const queue = [node];
    while(queue.length){
        const curr = queue.shift();
        for(let neighbor of curr.neighbors){
            if(!visited.has(neighbor)){
                queue.push(neighbor);
                const newNeighbor = new Node(neighbor.val);
                visited.set(neighbor, newNeighbor);
            }
            const newNode = visited.get(curr);
            newNode.neighbors.push(visited.get(neighbor));
        }
    }
    return visited.get(node);
};
