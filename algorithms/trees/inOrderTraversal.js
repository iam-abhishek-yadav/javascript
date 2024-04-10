function inOrderTraversal(node) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.data + ", ");
  inOrderTraversal(node.right);
}

