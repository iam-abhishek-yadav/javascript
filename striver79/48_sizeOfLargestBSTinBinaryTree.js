function largestBSTSubtree(root) {
  let maxSize = 0;

  function dfs(node) {
      if (!node) return [0, Infinity, -Infinity];

      const [leftSize, leftMin, leftMax] = dfs(node.left);
      const [rightSize, rightMin, rightMax] = dfs(node.right);

      if (node.val > leftMax && node.val < rightMin && leftSize !== -1 && rightSize !== -1) {
          const size = leftSize + rightSize + 1;
          maxSize = Math.max(maxSize, size);
          return [size, Math.min(leftMin, node.val), Math.max(rightMax, node.val)];
      } else {
          return [-1, null, null];
      }
  }

  dfs(root);
  return maxSize;
}
