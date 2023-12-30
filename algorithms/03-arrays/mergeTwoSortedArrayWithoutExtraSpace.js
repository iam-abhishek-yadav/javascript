// mergeArrays.js

function mergeTwoSortedArrays(a, b) {
    let left = a.length - 1;
    let right = 0;

    while (a[left] > b[right]) {
        [a[left], b[right]] = [b[right], a[left]];
        left--;
        right++;
    }

    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

mergeTwoSortedArrays(array1, array2);
console.log("Merged Array 1:", array1);
console.log("Merged Array 2:", array2);
