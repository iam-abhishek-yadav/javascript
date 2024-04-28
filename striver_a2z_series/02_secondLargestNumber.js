function getSecondOrderElements(n, a) {
    let max = -1,
        secMax = -1,
        min = Number.MAX_VALUE,
        secMin = Number.MAX_VALUE;
    
    for (let num of a) {
        if (num > max) {
            secMax = max;
            max = num;
        } else if (num > secMax) secMax = num;
        
        if (num < min) {
            secMin = min;
            min = num;
        } else if (num < secMin) secMin = num;
    }
    
    return [secMax, secMin];
}

