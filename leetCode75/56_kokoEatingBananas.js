var minEatingSpeed = function(piles, h) {
    let low = 1, high = Math.max(...piles), result = -1;
    while(low <= high){
        const mid = Math.floor((low+high)/2);
        const hoursNeeded = piles.reduce((total, pile) => total + Math.ceil(pile/mid), 0);

        if(hoursNeeded <= h){
            result = mid;
            high = mid-1;
        } else low = mid+1;
    }
    return result;
};
