class Solution {
  getAlienLanguage(dictionary, k) {
    let adj = [];
    for (let i = 0; i < k; i++) {
      adj.push([]);
    }
    for (let i = 0; i < dictionary.length - 1; i++) {
      let a = dictionary[i];
      let b = dictionary[i + 1];
      let len = Math.min(a.length, b.length);
      let j = 0;
      while (j < len) {
        if (a.charAt(j) !== b.charAt(j)) {
          adj[a.charCodeAt(j) - 'a'.charCodeAt(0)].push(b.charCodeAt(j) - 'a'.charCodeAt(0));
          break;
        }
        j++;
      }
    }
    let ans = [];
    let vis = new Array(k).fill(false);
    for (let i = 0; i < k; i++) {
      if (!vis[i]) {
        this.dfs(i, vis, adj, ans);
      }
    }
    return ans.reverse().join('');
  }

  dfs(V, vis, l, ans) {
    vis[V] = true;
    for (let i of l[V]) {
      if (!vis[i]) this.dfs(i, vis, l, ans);
    }
    ans.push(String.fromCharCode(V + 'a'.charCodeAt(0)));
  }
}
