console.log(" write programm to find out secoundMaximum element of the array");


function secoundMaximum(arr){
  
  let max = 0;
  let secoundMaximum = 0;
  
  for (let i=0 ; i< arr.length ;i++){
    
    if(arr[i] > max){
      secoundMaximum = max;
      max = arr[i];
    }
    else if(arr[i] > secoundMaximum && arr[i] < max){
      secoundMaximum = arr[i];
    }
  }
  
  return secoundMaximum;
}



let arr = [1,6,5,3,4,6,3,4,5,67,68]
console.log(secoundMaximum(arr));

console.log(" write programm to find out secoundMinimum element of the array");

function secoundMinimum(arr){
  
  let min = arr[0];
  let secoundMin = 0;
  
  for (let i=0 ; i< arr.length ;i++){
    
    if(arr[i] <= min){
      secoundMin = min;
      min = arr[i];
    }
    else if(arr[i] < secoundMin && arr[i] > min ){
      secoundMin = arr[i];
    }
  }
  
  return secoundMin;
}
let arr1 = [6,1,5,3,2,4,6,3,4,5,67,68]
console.log(" secound minimun element",secoundMinimum(arr1));


console.log(" write programm to shuffle array in the javascript");

function shuffleElement(arr3){

for(let i=0; i < arr3.length ;i++){
  
  let j = Math.floor(Math.random() * (arr3.length -  i));
  
  [ arr3[i], arr3[j] ] = [ arr3[j], arr3[i] ]
  
}

return arr3;
}

let arr3 = [1,2,3,4,5];
console.log(shuffleElement(arr3));




console.log(' write aprogramm to rotated the array in Javascript');

function routedArray(arr,n) {
  
 const result = arr.slice(n, arr.length).concat(arr.slice(0,n));
  
return result;
}

let arr = [1,2,3,4,5,6];
console.log(" routed array",routedArray(arr, 1));



console.log(' write a aprogramm to flatterJavascript Object in Javascript');

function flatternArrray(arr, temp = []) {
  
arr.forEach(element => {
     if(typeof element ==  'object'){
              return flatternArrray(element, temp)
     }
     else{
       temp.push(element)
     }
  })
  
  
return temp;

}

let arr1 = [[1],[2],[3,[4,[5,8],6,[8,9,0,11,12,13]]],5,6];
console.log(" Flattern Array in JavaScript",flatternArrray(arr1));



console.log(' write aprogramm to rotated the array in Javascript');

function routedArray(arr,n) {
  
 const result = arr.slice(n, arr.length).concat(arr.slice(0,n));
  
return result;
}

let arr = [1,2,3,4,5,6];
console.log(" routed array",routedArray(arr, 1));



console.log(' write a aprogramm to flatterJavascript Object in Javascript');

function flatternArrray(arr, temp = []) {
  
arr.forEach(element => {
     if(typeof element ==  'object'){
              return flatternArrray(element, temp)
     }
     else{
       temp.push(element)
     }
  })
  
  
return temp;

}

let arr5 = [[1],[2],[3,[4,[5,8],6,[8,9,0,11,12,13]]],5,6];
console.log(" Flattern Array in JavaScript",flatternArrray(arr1));


console.log(' write a aprogramm to find the number of vowles in Javascript');

function countOfVoewls(voewls) {
  
let value = ['a','e','i','o','u'];
let charArray = voewls.split('');
let count = 0;

for(let i=0; i<charArray.length; i++){
      if(value.indexOf(charArray[i])  == -1){
         count = count + 1 ;
      }
}
  return count;
}

let voewls = "aaabbccee";
console.log(" count of voewls in JavaScript",countOfVoewls(voewls));