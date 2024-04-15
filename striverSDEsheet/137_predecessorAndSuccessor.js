function findPreSuc(root, key) {
    let node = root;

    while (node !== null) {
        if (node.data <= key) {
            node = node.right;
        } else {
            suc = node;
            node = node.left;
        }
    }

    node = root;

    while (node !== null) {
        if (key > node.data) {
            pre = node;
            node = node.right;
        } else {
            node = node.left;
        }
    }
}

