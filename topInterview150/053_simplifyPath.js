var simplifyPath = function(path) {
    const stack = [];
    const components = path.split('/');

    for (const component of components) {
        if (component === '..') {
            stack.pop();
        } else if (component !== '' && component !== '.') {
            stack.push(component);
        }
    }

    return '/' + stack.join('/');
};
