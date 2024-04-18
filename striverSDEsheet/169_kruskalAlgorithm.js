class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.rank = new Array(n + 1).fill(0);
    }

    findParent(node) {
        if (this.parent[node] === node) return node;
        return (this.parent[node] = this.findParent(this.parent[node]));
    }

    unionByRank(u, v) {
        let pu = this.findParent(u);
        let pv = this.findParent(v);

        if (pu === pv) return;

        if (this.rank[pu] > this.rank[pv]) {
            this.parent[pv] = pu;
        } else if (this.rank[pv] > this.rank[pu]) {
            this.parent[pu] = pv;
        } else {
            this.parent[pv] = pu;
            this.rank[pu]++;
        }
    }
}

function kruskalMST(n, edges) {
    edges.sort((a, b) => a[2] - b[2]);

    const ds = new DisjointSet(n);
    let minSpanWeight = 0;

    for (const edge of edges) {
        const wt = edge[2];
        const u = edge[0];
        const v = edge[1];

        if (ds.findParent(u) !== ds.findParent(v)) {
            ds.unionByRank(u, v);
            minSpanWeight += wt;
        }
    }

    return minSpanWeight;
}

