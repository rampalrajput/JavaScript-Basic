
// find all substring pairs using recusrions

function generateSubStrings(str, start = 0, end = 2, result = []) {

    if (start === str.length - 1) {
        return result;
    }

    if (end > str.length - 1) {
        return generateSubStrings(str, start + 1, start + 2, result);
    }

        result.push(str.substring(start, start+1).concat(str.charAt(end)));
    return generateSubStrings(str, start, end + 1, result);

}


const str = 'abcdef';

console.log(generateSubStrings(str));


/// Array sorting using recursion method



// find all substring pairs using recusrions

function sortArray(arr, start = 0, end = 1) {

    if (start === arr.length) {
        return arr;
    }

    if (end > str.length) {
        return sortArray(arr, start + 1, start + 2);
    }

    if(arr[start] > arr[end]){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
           
    return sortArray(arr, start, end + 1);

}


const arr = [10,9,1,2,3,5,30,89,190];

console.log(sortArray(arr));


// check if a string a paindrome

function isPalindrome(str1, start, end) {

    if (start >= end) {
        return true;
    }

    if (str1.charAt(start) !== str1.charAt(end - 1)) {
        return false;
    }
    return isPalindrome(str1.substring(start, end), start + 1, end - 1)
}


let str1 = "aabaa";
console.log(isPalindrome(str1, 0, str1.length));


// Reverse a string using recursion

function stringReverse(str, end, newString = "") {

    if(end < 0){
        return newString;
    }

    newString = newString.concat(str.charAt(end));
    return stringReverse(str , end - 1, newString)
}


let str3 = "indrpalrajput"
console.log(stringReverse(str3 , str3.length -1));

// write a recurive way to flattern array in javascript


function flatternArray(arr1, tempArray =[]){


    arr1.forEach(element => {
           
        if(typeof element ==='object'){
            
         for(let i =0; i < element.length; i++){
            if(typeof element[i] == 'number')
           tempArray.push(element[i]);
            }
        }

        else{
              tempArray.push(element);
        }  
    })
   return tempArray;
}


function flatternArray1(arr1, tempArray =[]){


    arr1.forEach(element => {
           
        if(typeof element ==='object'){    
          return flatternArray(element, tempArray);
        }

        else{
              tempArray.push(element);
        }  
    })
   return tempArray;
}

// flattern Array with 

let arr1 = [1,2,[2,[2,3,3,3]],4,[7,8],[5,9],[4,5,6,7]]
console.log("FlatternArray recursively",flatternArray(arr1));

//find a factorial using recursion



function factorialRecursion (n, result = 1){

    if(n === 1 ){
        return result ;
    }

    return result = n * factorialRecursion(n-1);

}
console.log(" recursion ", factorialRecursion(5))

//  write a function to merge two array and remove duplicate


function mergeArraySort(arr,arr1){

    if(arr !== arr1){
        return true;
    }

    let mergeArrys = [...arr, ...arr1];
    return [...new Set(mergeArrys)];
}

let array = [1,2,3,4,5];
let arry1 = [1, 2,3,4,5,];

console.log(" Merger and sort array",mergeArraySort(array,arry1))


function removeFalsyArray(arr){
    let newArray = [];

    for(let i=0; i < arr.length ;i++)
        {
        if(arr[i]){
         newArray.push(arr[i])
        }
    }
    return newArray;

}
let arr2 = [1,2,3,4,0,undefined,null,false,""]

console.log(removeFalsyArray(arr2));
