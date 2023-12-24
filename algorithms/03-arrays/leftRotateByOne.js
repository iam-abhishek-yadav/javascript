const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const leftRotateByOne = (array) => {
  let temp = array[0];
  for(let i=0;i<array.length-1;i++){
      array[i] = array[i+1];
  }
  array[array.length-1] = temp;
  return array;
};

console.log(leftRotateByOne(array))