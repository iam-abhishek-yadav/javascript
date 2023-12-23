const bubbleSort = (arr) => {
    const n = arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}
  
const arr = [2,6,4,3,2,-1,23,-45]
bubbleSort(arr)
console.log(arr)