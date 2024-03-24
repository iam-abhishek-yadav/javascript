function alienOrder(dictionary, K) {
  const graph = {};
  for (let i = 0; i < K; i++) {
      for (let j = 0; j < dictionary[i].length; j++) {
          if (!graph[dictionary[i][j]]) {
              graph[dictionary[i][j]] = new Set();
          }
      }
  }
  for (let i = 1; i < K; i++) {
      const word1 = dictionary[i - 1], word2 = dictionary[i];
      const minLength = Math.min(word1.length, word2.length);
      let found = false;
      for (let j = 0; j < minLength; j++) {
          if (word1[j] !== word2[j]) {
              graph[word1[j]].add(word2[j]);
              found = true;
              break;
          }
      }
      if (!found && word1.length > word2.length) return '';
  }
  const visited = new Set(), result = [];
  function dfs(node) {
      visited.add(node);
      if (graph[node]) {
          for (const neighbor of graph[node]) {
              if (!visited.has(neighbor)) {
                  dfs(neighbor);
              }
          }
      }
      result.unshift(node);
  }
  for (const node in graph) {
      if (!visited.has(node)) dfs(node);
  }
  return result.join('');
}
