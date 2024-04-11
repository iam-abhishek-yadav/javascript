function search(s, pattern) {
    let n = s.length;
    let m = pattern.length;
    let z = new Array(n + m + 1).fill(0);
    let newString = pattern + "$" + s;
    let i = 0;

    while (i < newString.length) {
        if (i <= m)
            z[i] = 0;
        else {
            let left = 0, right = 0;
            if (newString.charAt(left) == newString.charAt(i)) {
                right = i;
                while (right < newString.length && newString.charAt(left) == newString.charAt(right)) {
                    left++;
                    right++;
                }
            }
            z[i] = left;
        }
        i++;
    }

    let list = [];
    for (let i = 0; i < newString.length; i++) {
        if (z[i] == m)
            list.push(i - m);
    }
    return list;
}

