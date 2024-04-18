function isBipartite(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0) {
            const queue = [i];
            colors[i] = 1;

            while (queue.length > 0) {
                const node = queue.shift();

                for (const neighbor of graph[node]) {
                    if (colors[neighbor] === 0) {
                        colors[neighbor] = -colors[node];
                        queue.push(neighbor);
                    } else if (colors[neighbor] === colors[node]) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}

