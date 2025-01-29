
let array = [1,2,3,4,5,6];
let array1 = [2,3,4,5,6]

console.log(" merge array", array.concat(array1))

// Remove Element from index 2
// console.log(array.splice(0,1));
// console.log(array);

//remove duplicate elemtn from array

for(let i=0;i< array.length;i++){
    if(!array1.includes(array[i])){
        array1.push(array[i]);
    }
}

// seraching element in the javascript array

console.log(" array element find",array.find(num => num === 5))
console.log(array1);


/// route arrys with k numbers



function routedArray (array, n){

    return array.slice((array.length - n)).concat(array.slice(0, array.length -n));
}

let array3 = [1,2,3,4,5,6];
let n= 1;
console.log("routed array",routedArray(array,3));

//

let map = new Map();
map.set(1,10)
map.set(2,20)
map.set(3,30)

//console.log(map);

// iterate map value and keys

for( let [key,value] of map){
   console.log(` ${key} and ${value}`)
}

//
map.forEach((key,value) => {
    console.log( `${key} and ${value} `)
    
});