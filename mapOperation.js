

/// find the frequency of each number in array

 function findFrequency (arr){

     let map = new Map();
     arr.forEach(element => {
         console.log(" Map element ",map.get(element));
        map.set(element, ((map.get(element) || 0) + 1))
     });

    return map;
 }
//

// find the first unique charachter in the arr

function firstUniqueCharcterInArray(str){

    let map = new Map();
     for( let char of str){
          map.set(char, ((map.get(char) || 0) + 1))
     }

     for( let key of map.keys()){
        if(map.get(key) === 1){
            return key;
        }
     }
     return null;
}

console.log(firstUniqueCharcterInArray("aaabsbddsdseef"))

/// repeted the string

let str = "abcdefgh"

let newString = "";
for(let i=str.length -1 ;i >= 0 ;i--){
    newString +=str.charAt(i);
}

//console.log(newString);

//console.log( str.includes('z'));

let arr = [1,2,-6,-9,-3,-9,-8];

let leftCounter = 0;
let rightCounter = arr.length - 1;

while( leftCounter <= rightCounter){

    if(arr[leftCounter] > 0 && arr[rightCounter] < 0){
         let temp = arr[rightCounter];
         arr[rightCounter] = arr[leftCounter]
         arr[leftCounter] = temp;
         
         leftCounter ++;
         rightCounter --;
    }
    else if(arr[leftCounter] > 0){
         leftCounter++;
    }
    else{
         rightCounter--;
    }
}

console.log(arr);

// find the intersection of the two arry 

function interSectionOfTwoArry(arr1,arr2){

       let set = new Set();
       let set1 = new Set();
       let arr3 = []

       arr1.forEach(e=>set.add(e))
       arr2.forEach(e=>set1.add(e))

       for( let value of set){
           if(set1.has(value)){
            arr3.push(value);
           }
       }

       return arr3;
}

let arr1 = [1,2,3,4,5 ,6]
let arr2 = [1,2,2,3]

console.log(interSectionOfTwoArry(arr1,arr2));


// routetd arry by n 


function routedArray(array, n){


      if(n>0){
      array = array.slice(n).concat(array.slice(0,n)) 
    }

    return array;
}

console.log(routedArray(arr1, 0));
