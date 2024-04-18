function isBipartite(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(0);

    const dfs = (node, color) => {
        if (colors[node] !== 0) {
            return colors[node] === color;
        }

        colors[node] = color;

        for (const neighbor of graph[node]) {
            if (!dfs(neighbor, -color)) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) {
            return false;
        }
    }

    return true;
}

