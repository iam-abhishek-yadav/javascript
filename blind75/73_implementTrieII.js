class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.end = 0;
        this.count = 0;
    }

    containsChild(ch) {
        return this.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }

    put(ch, node) {
        this.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }

    get(ch) {
        return this.children[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    incrementEnd() {
        this.end++;
    }

    incrementCount() {
        this.count++;
    }

    getEnd() {
        return this.end;
    }

    getCount() {
        return this.count;
    }

    deleteEnd() {
        this.end--;
    }

    deleteCount() {
        this.count--;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (!cur.containsChild(ch)) {
                cur.put(ch, new TrieNode());
            }
            cur = cur.get(ch);
            cur.incrementCount();
        }
        cur.incrementEnd();
    }

    countWordsEqualTo(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (cur.containsChild(ch)) {
                cur = cur.get(ch);
            } else {
                return 0;
            }
        }
        return cur.getEnd();
    }

    countWordsStartingWith(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (cur.containsChild(ch)) {
                cur = cur.get(ch);
            } else {
                return 0;
            }
        }
        return cur.getCount();
    }

    erase(word) {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const ch = word.charAt(i);
            if (cur.containsChild(ch)) {
                cur = cur.get(ch);
                cur.deleteCount();
            } else {
                return;
            }
        }
        cur.deleteEnd();
    }
}
