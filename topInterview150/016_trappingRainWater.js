var trap = function(height) {
    if (height.length < 3) return 0;
    let [left, right, leftMax, rightMax, waterTrapped] = [0, height.length - 1, 0, 0, 0];
    
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax < rightMax) {
            waterTrapped += leftMax - height[left];
            left++;
        } else {
            waterTrapped += rightMax - height[right];
            right--;
        }
    }

    return waterTrapped;
};

