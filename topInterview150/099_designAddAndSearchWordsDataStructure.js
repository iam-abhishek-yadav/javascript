var WordDictionary = function() {
    this.root = {};
};
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(const char of word){
        if(!node[char]) node[char] = [];
        node = node[char];
    }
    node.isEndOfWord = true;
};
WordDictionary.prototype.search = function(word) {
    const dfs = (node, index) => {
        if (!node) return false;
        if (index === word.length) return node.isEndOfWord === true;

        const char = word[index];

        if (char === '.') {
            for (const nextChar in node) {
                if (dfs(node[nextChar], index + 1)) return true;
            }
        } else {
            return dfs(node[char], index + 1);
        }

        return false;
    };

    return dfs(this.root, 0);
};
