var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = new Array(numRows).fill('');
    let direction = 1;
    let currentRow = 0;

    for (let char of s) {
        rows[currentRow] += char;
        currentRow += direction;

        if (currentRow === 0 || currentRow === numRows - 1) {
            direction *= -1;
        }
    }

    return rows.join('');
};
