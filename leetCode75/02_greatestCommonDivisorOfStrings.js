gcdOfStrings = (str1, str2) => {
    if (!((str1 + str2) === (str2 + str1))) {
        return "";
    }

    return str1.substring(0, gcd(str1.length, str2.length));
}

gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
}
