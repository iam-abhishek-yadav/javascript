var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.vals = new Map();
    this.counts = new Map();
    this.lists = new Map();
    this.min = -1;
};

LFUCache.prototype.get = function(key) {
    if (!this.vals.has(key)) return -1;

    let count = this.counts.get(key);
    this.counts.set(key, count + 1);
    this.lists.get(count).delete(key);

    if (count === this.min && this.lists.get(count).size === 0) {
        this.min++;
    }

    if (!this.lists.has(count + 1)) {
        this.lists.set(count + 1, new Set());
    }

    this.lists.get(count + 1).add(key);
    return this.vals.get(key);
};

LFUCache.prototype.put = function(key, value) {
    if (this.capacity <= 0) return;

    if (this.vals.has(key)) {
        this.vals.set(key, value);
        this.get(key);
        return;
    }

    if (this.vals.size >= this.capacity) {
        const minFreqKey = this.lists.get(this.min).values().next().value;
        this.lists.get(this.min).delete(minFreqKey);
        this.vals.delete(minFreqKey);
        this.counts.delete(minFreqKey);
    }

    this.vals.set(key, value);
    this.counts.set(key, 1);
    this.min = 1;
    if (!this.lists.has(1)) {
        this.lists.set(1, new Set());
    }
    this.lists.get(1).add(key);
};

