var minWindow = function(s, t) {
    const map = new Map();
    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let [left, right, min, minWindow, req] = [0, 0, Infinity, "", map.size];

    while (right < s.length) {
        const char = s[right];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                req--;
            }
        }

        while (req === 0) {
            const curr = right - left + 1;
            if (curr < min) {
                min = curr;
                minWindow = s.substring(left, right + 1);
            }

            const leftChar = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) {
                    req++;
                }
            }
            left++;
        }

        right++;
    }

    return minWindow;
};

