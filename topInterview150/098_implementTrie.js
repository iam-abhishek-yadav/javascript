var Trie = function() {
    this.root = {};
};
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(const char of word){
        if(!node[char]) node[char] = [];
        node = node[char];
    }
    node.isEndOfWord = true;
};
Trie.prototype.search = function(word) {
    let node = this.root;
    for(const char of word){
        if(!node[char]) return false;
        node = node[char];
    }
    return node.isEndOfWord === true;
};
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(const char of prefix) {
        if(!node[char]) return false;
        node = node[char];
    }
    return true;
};
