var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = candies.map((candy) => {return candy + extraCandies >= max});
    return result;
};
