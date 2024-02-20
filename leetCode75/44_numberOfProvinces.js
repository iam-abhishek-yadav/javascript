var findCircleNum = function(isConnected) {
    const visited = new Set();
    let provinces = 0;
    const dfs = (node) => {
        visited.add(node);
        for(let i=0;i<isConnected.length;i++){
            if(isConnected[node][i] === 1 && !visited.has(i)){
                dfs(i);
            }
        }
    }
    for(let i=0;i<isConnected.length;i++){
        if(!visited.has(i)){
            dfs(i);
            provinces++;
        }
    }
    return provinces;
};
