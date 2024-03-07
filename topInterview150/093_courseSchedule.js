var canFinish = function(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    for(const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        inDegree[course]++;
    }
    const queue = [];
    for(let i=0;i<numCourses;i++){
        if(inDegree[i] === 0) queue.push(i);
    }
    let count  = 0;
    while(queue.length){
        const curr = queue.shift();
        count++;
        for(const neighbor of graph[curr]){
            if (--inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return count === numCourses;
};
