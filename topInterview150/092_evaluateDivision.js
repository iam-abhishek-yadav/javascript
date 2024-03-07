var calcEquation = function(equations, values, queries) {
    const graph = {};
    for(let i=0;i<equations.length;i++){
        const [a, b] = equations[i];
        const value = values[i];
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        graph[a].push({node: b, value});
        graph[b].push({node: a, value: 1/value});
    }

    const dfs = (a,b, visited) => {
        if(!graph[a] || !graph[b]) return -1.0;
        if(a === b) return 1.0;
        visited.add(a);
        for(const {node, value} of graph[a]) {
            if(!visited.has(node)) {
                const res = dfs(node, b, visited);
                if(res !== -1.0) return value * res;
            }
        }
        return -1.0;
    }

    const result = [];
    for(const [a, b] of queries) {
        const res = dfs(a,b,new Set());
        result.push(res);
    }
    return result;
};
