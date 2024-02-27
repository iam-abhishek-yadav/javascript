class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
            if (!node.words) {
                node.words = [];
            }
            node.words.push(word);
        }
    }

    search(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node[char]) {
                return [];
            }
            node = node[char];
        }
        if (node.words) {
            node.words.sort();
            return node.words.slice(0, 3);
        } else {
            return [];
        }
    }
}

var suggestedProducts = function(products, searchWord) {
    const trie = new Trie();

    for (const product of products) {
        trie.insert(product);
    }

    const result = [];
    let currentPrefix = '';

    for (let i = 0; i < searchWord.length; i++) {
        currentPrefix += searchWord[i];
        result.push(trie.search(currentPrefix));
    }

    return result;
};

