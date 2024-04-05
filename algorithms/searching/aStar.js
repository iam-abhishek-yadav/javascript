function aStar(graph, start, target) {
    const openSet = new Set([start]);
    const cameFrom = {};
    const gScore = {};
    const fScore = {};

    for (let vertex in graph) {
        gScore[vertex] = Infinity;
        fScore[vertex] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, target);

    while (openSet.size > 0) {
        let current = null;
        for (let vertex of openSet) {
            if (!current || fScore[vertex] < fScore[current]) {
                current = vertex;
            }
        }

        if (current === target) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);

        for (let neighbor in graph[current]) {
            let tentativeGScore = gScore[current] + graph[current][neighbor];
            if (tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, target);
                if (!openSet.has(neighbor)) {
                    openSet.add(neighbor);
                }
            }
        }
    }

    return null; // No path found
}

function heuristic(node, target) {
    // Example heuristic function (Euclidean distance)
    const dx = node.x - target.x;
    const dy = node.y - target.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function reconstructPath(cameFrom, current) {
    const path = [current];
    while (cameFrom[current]) {
        current = cameFrom[current];
        path.unshift(current);
    }
    return path;
}

