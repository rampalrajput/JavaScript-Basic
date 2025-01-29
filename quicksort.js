function quicksort(arr){
    if(arr.length <=1 ){
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

for(let i=1;i<arr.length;i++){

 if(arr[i] < pivot){
      left.push(arr[i])     
  }
else{
   right.push(arr[i]);    
}
}

return [...quicksort(left), pivot, ...quicksort(right)];

}


let arr = [5,6,7,8,1,2,3,5,6,7,9,0];
console.log(" quick sort alogithum" ,quicksort(arr))