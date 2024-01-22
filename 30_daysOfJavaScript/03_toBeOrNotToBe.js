var expect = function(val) {
    return {
        toBe : (expectedValue) => {
            if(expectedValue === val) return true;
            else throw new Error ("Not Equal");
        },
        notToBe : (expectedValue) => {
            if(expectedValue !== val) return true;
            else throw new Error ("Equal");
        }
    }
};