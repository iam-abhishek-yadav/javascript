function wordBreak(s, dictionary) {
    const hash = new Set(dictionary);
    const ans = [];
    generate('', s, hash, ans);
    return ans;
}

function generate(str, s, hash, ans) {
    if (s.length === 0) {
        ans.push(str.trim());
        return;
    }

    let word = '';

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        word += ch;

        if (hash.has(word)) {
            str += word + ' ';
            generate(str, s.substring(i + 1), hash, ans);
            const del = str.lastIndexOf(word);
            str = str.substring(0, del);
        }
    }
}

