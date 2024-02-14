var canCompleteCircuit = function(gas, cost) {
    let [totalGas, totalCost, currentGas, startingIndex] = [0, 0, 0, 0];

    for(let i=0;i<gas.length;i++){
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];
        if(currentGas < 0){
            startingIndex = i+1;
            currentGas = 0;
        }
    }
    if(totalGas >= totalCost){
        return startingIndex;
    }
    return -1;
};
