class Solution {
    static findKRotation(arr) {
        let low = 0, high = arr.length - 1, min = 0;
  
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
  
            if (arr[low] <= arr[high]) {
                if (arr[low] < arr[min]) {
                    return low;
                } else {
                    return min;
                }
            }
  
            if (arr[low] <= arr[mid]) {
                min = low;
                low = mid + 1;
            } else {
                min = mid;
                high = mid - 1;
            }
        }
        return min;
    }
  }
  
  let rotatedArray = [4, 5, 6, 7, 0, 1, 2];
  let rotationIndex = Solution.findKRotation(rotatedArray);
  console.log("Rotation index:", rotationIndex);
  