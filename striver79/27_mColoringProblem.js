class Solution {
  graphColoring(graph, m, n) {
      let adj = [];
      for (let i = 0; i < n; i++) {
          adj.push([]);
      }
      for (let i = 0; i < graph.length; i++) {
          for (let j = 0; j < graph[0].length; j++) {
              if (graph[i][j] === true) {
                  adj[i].push(j);
              }
          }
      }

      let color = new Array(n).fill(0);
      return this.solve(adj, m, n, color, 0);
  }

  solve(adj, m, n, color, node) {
      if (node === n) {
          return true;
      }

      for (let i = 1; i <= m; i++) {
          if (this.check(i, color, adj[node])) {
              color[node] = i;
              if (this.solve(adj, m, n, color, node + 1) === true) return true;
              else {
                  color[node] = 0;
              }
          }
      }

      return false;
  }

  check(i, color, arr) {
      for (let j of arr) {
          if (color[j] === i) {
              return false;
          }
      }

      return true;
  }
}
