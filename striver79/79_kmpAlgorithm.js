function stringMatch(text, pattern) {
    let res = [];
    let concat = pattern + "#" + text;
    let v = kmp(concat);

    for (let i = pattern.length; i < v.length; i++) {
        let el = v[i];
        if (el === pattern.length) {
            let id = i - 2 * pattern.length + 1;
            if (id >= 0) {
                res.push(id);
            }
        }
    }

    return res;
}

function kmp(s) {
    let lps = new Array(s.length).fill(0);
    for (let i = 1; i < lps.length; i++) {
        let prev_idx = lps[i - 1];
        while (prev_idx > 0 && s[i] !== s[prev_idx]) {
            prev_idx = lps[prev_idx - 1];
        }
        lps[i] = prev_idx + (s[i] === s[prev_idx] ? 1 : 0);
    }
    return lps;
}

