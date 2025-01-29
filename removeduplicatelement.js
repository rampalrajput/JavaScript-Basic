
let arr = [1, 2 , 4 , 5 ,4, 5,5 ,5, 6 , 7, 8]

let uniqueElement = []

for(let i=0 ; i< arr.length ;i++) {

    if(uniqueElement.indexOf(arr[i]) == -1){
       uniqueElement.push(arr[i]);
    }
}
console.log(uniqueElement);

/// revere the given string in javascript

let text = "RAMPAL RAJPUT SOFTWARE ENGINNER"

//let reversText = text.split(" ").reverse().join(" ");

let newText = text.split(" ");
let reverseString = "";

for (let i = newText.length -1 ; i >= 0 ; i--){

           reverseString += newText[i] + " ";
}

console.log(" reverse String ",reverseString);

let check = (text || reverseString);
console.log( check);

// map array 
let arrr3 = [1, 2, 3 ,4 , 6 ,7 ,8]

let newArray = arrr3.filter( x => x % 2 == 0 );
console.log(newArray);

// write a function to find maximum number of the given array



const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (a, b) => a + b
  
);
console.log(sumWithInitial);