var letterCombinations = function(digits) {
    if(!digits) return [];
    const digitToLetters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const result = [];
    const backtrack = (combination, nextDigit) => {
        if(combination.length === digits.length) {
            result.push(combination);
            return;
        }
        const current = digits[nextDigit];
        const letters = digitToLetters[current];

        for (const letter of letters) {
            backtrack(combination + letter, nextDigit + 1);
        }
    }
    backtrack('', 0);
    return result;
};
