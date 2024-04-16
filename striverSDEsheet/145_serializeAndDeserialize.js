var serialize = function (root) {
    return encode(root, '');
};

var deserialize = function (data) {
    const dataArray = data.split(',');
    return decode(dataArray);
};

const encode = (root, str) => {
    if (root === null) {
        str += '#,';
    } else {
        str += root.val + '' + ',';
        str = encode(root.left, str);
        str = encode(root.right, str);
    }
    return str;
};

const decode = dataList => {
    if (dataList[0] === '#') {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = decode(dataList);
    root.right = decode(dataList);

    return root;
};

