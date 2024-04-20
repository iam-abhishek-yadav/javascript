class Node {
    constructor() {
        this.links = new Array(26).fill(null);
        this.flag = false;
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

    setEnd() {
        this.flag = true;
    }

    isEnd() {
        return this.flag;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (!node.containsKey(ch)) {
                node.put(ch, new Node());
            }
            node = node.get(ch);
        }
        node.setEnd();
    }

    checkIfPrefixExist(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (node.containsKey(ch)) {
                node = node.get(ch);
                if (!node.isEnd()) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
}

function completeString(n, a) {
    const trie = new Trie();
    for (const it of a) {
        trie.insert(it);
    }
    let longest = "";
    for (const it of a) {
        if (trie.checkIfPrefixExist(it)) {
            if (it.length > longest.length) {
                longest = it;
            } else if (it.length === longest.length && it.localeCompare(longest) < 0) {
                longest = it;
            }
        }
    }
    if (longest === "") {
        return "None";
    }
    return longest;
}

