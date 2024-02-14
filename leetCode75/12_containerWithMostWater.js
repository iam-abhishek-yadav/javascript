var maxArea = function(height) {
    let [max, left, right] = [0, 0, height.length-1];
    while(left < right){
        if(height[left] < height[right]){
            max = Math.max(max, height[left] * (right-left));
            left++;
        } else {
            max = Math.max(max, height[right] * (right-left));
            right--;
        }
    }
    return max;
};
