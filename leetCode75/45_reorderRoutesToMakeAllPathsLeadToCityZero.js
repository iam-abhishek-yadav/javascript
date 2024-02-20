var minReorder = function(numNodes, connections) {
    const adjacencyList = Array.from({ length: numNodes }, () => []);

    for (const [nodeA, nodeB] of connections) {
        adjacencyList[nodeA].push([nodeB, 1]);
        adjacencyList[nodeB].push([nodeA, 0]);
    }

    const depthFirstSearch = (currentNode, parentNode) => {
        let count = 0;

        for (const [neighbor, direction] of adjacencyList[currentNode]) {
            if (neighbor !== parentNode) {
                count += direction + depthFirstSearch(neighbor, currentNode);
            }
        }

        return count;
    };

    return depthFirstSearch(0, -1);
};

