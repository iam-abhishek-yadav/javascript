class SmallestInfiniteSet {
  constructor() {
    this.set = new Set(Array.from({ length: 1001 }, (_, i) => i + 1));
  }
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.set.size === 0) return null;

  let min = Infinity;

  for (const num of this.set) {
    if (num < min) {
      min = num;
    }
  }

  this.set.delete(min);
  return min;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
     if (!this.set.has(num)) this.set.add(num)
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
