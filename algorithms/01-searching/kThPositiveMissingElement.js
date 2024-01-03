// Q-1539 in leetcode

var findKthPositive = function(arr, k) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if ((arr[mid] - mid - 1) < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return k + high + 1;
};


const arrExample = [2, 3, 4, 7, 11];
const kExample = 5;

const resultExample = findKthPositive(arrExample, kExample);

console.log(`The ${kExample}-th positive integer missing from the array is: ${resultExample}`);

