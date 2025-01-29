

//// write function to sort array in javascript 

function sortArray(arr){

  for(let i=0; i<arr.length;i++){

    for(let j=i+1; j < arr.length -1; j++){

      if(arr[i] > arr[j]){
         let temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp ;
      }
    }
  }
 // console.log(arr);
}

let arr = [1,3,5,2,6,8];

sortArray(arr);

/// sort Array using inseration sort in javascript

 function inserationSort(arr1){
   
  for(let i=1; i < arr1.length ;i++){

       for(let j = i-1 ; j >= 0  ; j--){

        if( arr1[j] > arr1[i]){
        
            let temp = arr1[j];
            arr1[j] = arr1[i];
            arr1[i] = temp; 

        }

       }
       
  }
  console.log(arr1);
 }

 let arr1 = [4, 2 ,568 ,56, 78];
 inserationSort(arr1)

