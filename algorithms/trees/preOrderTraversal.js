function preOrderTraversal(node) {
  if (node === null) {
    return;
  }
  console.log(node.data + ", ");
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

