var maxArea = function(height) {
  let [left, right, max] = [0, height.length-1, 0];
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
