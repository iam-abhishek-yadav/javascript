class Node {
    constructor() {
        this.links = new Array(26).fill(null);
    }

    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }

    get(ch) {
        return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    put(ch, node) {
        this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }
}

function countDistinctSubstrings(s) {
    const root = new Node();
    const n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let node = root;

        for (let j = i; j < n; j++) {
            if (!node.containsKey(s.charAt(j))) {
                node.put(s.charAt(j), new Node());
                count++;
            }
            node = node.get(s.charAt(j));
        }
    }
    return count + 1;
}

