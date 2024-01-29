var compactObject = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    const result = {};
    for (const key in obj) {
        const compactedValue = compactObject(obj[key]);
        if (Boolean(compactedValue)) {
            result[key] = compactedValue;
        }
    }
    return result;
};

