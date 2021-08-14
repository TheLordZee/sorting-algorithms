function insertionSort(arr) {
    let sortedIndex = 0;
    let i = 1;
    while(i < arr.length){
      if(arr[i] < arr[i-1]){
        for(let j = sortedIndex; j >= 0; j--){
          if(j === 0){
            let temp = arr[i];
            arr.splice(i,1);
            arr.splice(j,0,temp);
            sortedIndex++;
            break;
          }
          if(arr[i] >= arr[j]){
            let temp = arr[i];
            arr.splice(i,1);
            arr.splice(j,0,temp);
            sortedIndex++;
            break;
          }
        }
      }
      i++;
    }
    return arr;
}
module.exports = insertionSort;