var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let prev = -Infinity, count = 0;
    for(const [a, b] of points){
        if(prev < a){
            prev = b;
            count++;
        } 
    }
    return count;
};

