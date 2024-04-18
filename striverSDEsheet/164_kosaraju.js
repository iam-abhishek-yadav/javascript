function maxNumOfSubstrings(S) {
    let mins = new Array(26).fill(Number.MAX_VALUE);
    let maxs = new Array(26).fill(-1);
    let exists = new Array(26).fill(false);
    let prefixSum = new Array(S.length + 1).fill(0).map(() => new Array(26).fill(0));

    for (let i = 0; i < S.length; i++) {
        prefixSum[i + 1] = prefixSum[i].slice();
        prefixSum[i + 1][S.charCodeAt(i) - 97] += 1;
        mins[S.charCodeAt(i) - 97] = Math.min(mins[S.charCodeAt(i) - 97], i);
        maxs[S.charCodeAt(i) - 97] = Math.max(maxs[S.charCodeAt(i) - 97], i);
        exists[S.charCodeAt(i) - 97] = true;
    }

    let graph = new Array(26).fill(0).map(() => new Array(26).fill(false));

    for (let i = 0; i < 26; i++) {
        if (exists[i]) {
            for (let j = 0; j < 26; j++) {
                if (prefixSum[maxs[i] + 1][j] - prefixSum[mins[i]][j] > 0) {
                    graph[i][j] = true;
                }
            }
        }
    }

    let stack = new Stack();
    let visited = new Array(26).fill(false);

    for (let i = 0; i < 26; i++) {
        if (exists[i] && !visited[i]) {
            dfs1(i, graph, stack, visited);
        }
    }

    let batch = 0;
    let batches = new Array(26).fill(-1);
    let degree = new Array(26).fill(0);

    while (!stack.isEmpty()) {
        let v = stack.pop();
        if (batches[v] < 0) {
            dfs2(v, graph, batches, batch, degree);
            batch++;
        }
    }

    let res = [];

    for (let i = batch - 1; i >= 0; i--) {
        if (degree[i] === 0) {
            let min = Number.MAX_VALUE, max = -1;
            for (let j = 0; j < 26; j++) {
                if (batches[j] === i) {
                    min = Math.min(mins[j], min);
                    max = Math.max(maxs[j], max);
                }
            }
            res.push(S.substring(min, max + 1));
        }
    }

    return res;
}

function dfs1(v, graph, stack, visited) {
    if (!visited[v]) {
        visited[v] = true;
        for (let i = 0; i < 26; i++) {
            if (graph[v][i] && !visited[i]) {
                dfs1(i, graph, stack, visited);
            }
        }
        stack.push(v);
    }
}

function dfs2(v, graph, batches, batch, degree) {
    if (batches[v] < 0) {
        batches[v] = batch;
        for (let i = 0; i < 26; i++) {
            if (graph[i][v]) {
                dfs2(i, graph, batches, batch, degree);
            }
        }
    } else {
        if (batches[v] !== batch) {
            degree[batches[v]] += 1;
        }
    }
}

class Stack {
    constructor() {
        this.values = new Array(26);
        this.top = 0;
    }

    push(val) {
        this.values[this.top++] = val;
    }

    pop() {
        this.top--;
        return this.values[this.top];
    }

    isEmpty() {
        return this.top === 0;
    }
}

