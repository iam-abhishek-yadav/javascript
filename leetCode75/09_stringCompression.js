/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let [writeIndex, readIndex] = [0, 0];

    while (readIndex < chars.length) {
        const currentChar = chars[readIndex];
        let count = 0;

        while (readIndex < chars.length && chars[readIndex] === currentChar) {
            readIndex++;
            count++;
        }

        chars[writeIndex++] = currentChar;

        if (count > 1) {
            const countString = count.toString();
            for (let i = 0; i < countString.length; i++) {
                chars[writeIndex++] = countString[i];
            }
        }
    }

    return writeIndex;
};
