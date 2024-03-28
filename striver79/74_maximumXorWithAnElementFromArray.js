class Trie {
    constructor() {
        this.children = [null, null];
    }

    insert(x) {
        let node = this;
        for (let i = 30; i >= 0; i--) {
            const v = (x >> i) & 1;
            if (node.children[v] === null) {
                node.children[v] = new Trie();
            }
            node = node.children[v];
        }
    }

    search(x) {
        let node = this;
        let ans = 0;
        for (let i = 30; i >= 0; i--) {
            const v = (x >> i) & 1;
            if (node.children[v ^ 1] !== null) {
                ans |= 1 << i;
                node = node.children[v ^ 1];
            } else if (node.children[v] !== null) {
                node = node.children[v];
            } else {
                return -1;
            }
        }
        return ans;
    }
}

var maximizeXor = function (nums, queries) {
    nums.sort((a, b) => a - b);
    const n = queries.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    idx.sort((i, j) => queries[i][1] - queries[j][1]);
    const ans = [];
    const trie = new Trie();
    let j = 0;
    for (const i of idx) {
        const x = queries[i][0];
        const m = queries[i][1];
        while (j < nums.length && nums[j] <= m) {
            trie.insert(nums[j++]);
        }
        ans[i] = trie.search(x);
    }
    return ans;
}

