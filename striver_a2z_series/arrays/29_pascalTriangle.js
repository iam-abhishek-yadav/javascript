var generate = function(numRows) {
    let triangle = [];
    for(let i=0;i<numRows;i++){
        const temp = [];
        for(let j=0;j<=i;j++){
            if(j === 0 || j === i) temp.push(1);
            else temp.push(triangle[i-1][j] + triangle[i-1][j-1]);
        }
        triangle.push(temp);
    }
    return triangle;
};
