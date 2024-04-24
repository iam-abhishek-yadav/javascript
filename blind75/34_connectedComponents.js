class Solution {
  findNumOfProvinces(roads, n) {
    const ds = new DisjointSet(n);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (roads[i][j] === 1) {
          if (ds.findParent(i) !== ds.findParent(j)) {
            ds.union(i, j);
          }
        }
      }
    }

    const set = new Set(ds.parent);
    return set.size;
  }
}

class DisjointSet {
  constructor(n) {
    this.rank = new Array(n).fill(0);
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  findParent(i) {
    if (this.parent[i] === i)
      return i;
    else {
      const j = this.parent[i];
      const p = this.findParent(j);
      this.parent[i] = p;
      return p;
    }
  }

  union(u, v) {
    const i = this.findParent(u);
    const j = this.findParent(v);
    if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i;
    } else if (this.rank[i] < this.rank[j]) {
      this.parent[i] = j;
    } else {
      this.parent[j] = i;
      this.rank[i] += 1;
    }
  }
}
