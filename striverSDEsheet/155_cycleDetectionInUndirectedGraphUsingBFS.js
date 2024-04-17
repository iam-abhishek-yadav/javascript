class Solution {
    static checkForCycle(adj, s, vis, parent) {
        let q = [];
        q.push([s, -1]);
        vis[s] = true;

        while (q.length > 0) {
            let [node, par] = q.shift();

            for (let it of adj[node]) {
                if (!vis[it]) {
                    q.push([it, node]);
                    vis[it] = true;
                } else if (par !== it) {
                    return true;
                }
            }
        }

        return false;
    }

    isCycle(V, adj) {
        let vis = new Array(V).fill(false);
        let parent = new Array(V).fill(-1);

        for (let i = 0; i < V; i++) {
            if (!vis[i]) {
                if (this.checkForCycle(adj, i, vis, parent)) {
                    return true;
                }
            }
        }

        return false;
    }
}

