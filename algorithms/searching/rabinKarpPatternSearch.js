const PRIME = 101;

function rabinKarp(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const patternHash = hash(pattern, m);
    let textHash = hash(text, m);

    for (let i = 0; i <= n - m; i++) {
        if (textHash === patternHash && text.substring(i, i + m) === pattern) {
            return i;
        }
        if (i < n - m) {
            textHash = recalculateHash(text, i, i + m, textHash, m);
        }
    }

    return -1;
}

function hash(str, length) {
    let hashValue = 0;
    for (let i = 0; i < length; i++) {
        hashValue += str.charCodeAt(i) * Math.pow(PRIME, i);
    }
    return hashValue;
}

function recalculateHash(str, oldIndex, newIndex, oldHash, patternLen) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = newHash / PRIME;
    newHash += str.charCodeAt(newIndex) * Math.pow(PRIME, patternLen - 1);
    return newHash;
}

