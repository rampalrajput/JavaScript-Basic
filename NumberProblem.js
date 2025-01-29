
//convert Decimal Number to Decimal 

function ConverIntegerToDecimal(number, binaryNumber = "") {

    if (number < 1) {
        return (binaryNumber.split('').reverse().join(''));
    }

    let remindervalue = Math.round(number % 2);
    binaryNumber += remindervalue;

    return ConverIntegerToDecimal(Math.floor(number / 2), binaryNumber);
}

console.log(ConverIntegerToDecimal(2220))


function convertBinaryNumberTODecimal( num , start = 0, end= (num.length -1), decimalNumber = 0 ){

    if(end < 0){
       return decimalNumber;
    }
         
    if(Number(num.charAt(end)) === 1)
    decimalNumber+= Math.pow(2,start);

    return convertBinaryNumberTODecimal(num.substring(0,end),start + 1,end-1,decimalNumber);
}

console.log("Decimal Number "+convertBinaryNumberTODecimal("1111"));


/// without recursion in convert BinaryNumber to Decimal


function convertBinaryNumberTODecimal1(num){

    let decimalNumber = 0;
    let size = num.length - 1;

    for(let i =0 ; i<num.length ; i++){
        if( num.charAt(size) == 1){
        decimalNumber+= Math.pow(2,i);
        }
        size--;   
    }

    return decimalNumber;
 
}

console.log("Decimal Number wihout Recursion "+convertBinaryNumberTODecimal1("1111"));


// routed array

function routedArray(arr,k){
    
    let routedArray = [];

    routedArray = arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k));
    
    return routedArray;
}

let arr = [1,2,3,4,5]
console.log(routedArray(arr,3));

// genrate a number upto Fibonacci series

let num = 20;
let tempArray = [];
tempArray[0] = 0;
tempArray[1] = 1;

for(let i=2; i < num ; i++ ){

    let temp = tempArray[i-1] + tempArray[i-2];

    if(temp > num){
            break;
    }
    else{
        tempArray[i] = temp;
    }
}

console.log(" Fibonaaci series ",tempArray);
