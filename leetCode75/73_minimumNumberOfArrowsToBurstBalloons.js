var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let ans = 0, prev = -Infinity;
    for(const [a, b] of points){
        if(prev < a){
            ans++;
            prev = b;
        }
    }
    return ans;
};
