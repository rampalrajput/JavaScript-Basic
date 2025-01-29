function flatternArray(arr) {
    let result = [];

    arr.forEach(element => {
        if (typeof element == 'object') {
            result = result.concat(flatternArray(element));
        }
        else {
            result.push(element);
        }
    });

    return result;
}

let arr12 = [1, 2, 3, 4, [4, [5, [6]]], 3, 4, 5];

console.log(" Flattern Array", flatternArray(arr12));


/// Secound max an Minum Array problems;




//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let ar = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(ar));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrv = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrv));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrx= [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrx));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arrz = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arrz));




//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrt = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrt));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arrh = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arrh));




//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arrf = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arrf));

//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arre = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arre));
  
//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arr13 = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arr13));

//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrd = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrd));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrc = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrc));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arrb = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arrb));

//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arra = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arra));

//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arr7 = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arr7));




//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arr6 = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arr6));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
  let max = arr[0];
  let secoundmax = arr[0];
  
  let min = arr[0];
  let secoundMin = arr[1];
  
  for(let num of arr){
          if(num > max){
            secoundmax = max;
            max = num;
          }
          else if( num > secoundmax && secoundmax < max ){
            secoundmax = num;
          }
  }
  
  for(let num of arr){
          if(num < min){
            secoundMin = min;
            min = num;
          }
          else if( num < secoundMin && num > min ){
            secoundMin = num;
          }
  }
  
return [secoundmax,secoundMin]; 
}

let arr4 = [1,2,3,5,4,5,8,6,10]
console.log(secondLargestArray(arr4));




//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arr3 = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arr3));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arr = [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arr));
  



//find the secound largest number in the Array

function secondLargestArray(arr){
  
    let max = arr[0];
    let secoundmax = arr[0];
    
    let min = arr[0];
    let secoundMin = arr[1];
    
    for(let num of arr){
            if(num > max){
              secoundmax = max;
              max = num;
            }
            else if( num > secoundmax && secoundmax < max ){
              secoundmax = num;
            }
    }
    
    for(let num of arr){
            if(num < min){
              secoundMin = min;
              min = num;
            }
            else if( num < secoundMin && num > min ){
              secoundMin = num;
            }
    }
    
  return [secoundmax,secoundMin]; 
  }
  
  let arr1= [1,2,3,5,4,5,8,6,10]
  console.log(secondLargestArray(arr1));

  //write a programm to shift all zeros in the left side

  // write a programm to shift all zero in right side


function pushToZeroEnd(arr){
  
    let leftCounter = 0;
    let rightCounter = arr.length -1;
    
    
    while(leftCounter < rightCounter){
    
    if(arr[leftCounter] === 0 && arr[rightCounter] !== 0){
       let temp = arr[leftCounter];
       arr[leftCounter] = arr[rightCounter];
       arr[rightCounter] = temp;
       
       leftCounter++;
       rightCounter--;
  }
  
    else if(arr[leftCounter] !==0 && arr[rightCounter] === 0) {
       rightCounter--;
  }
  
    else{
      leftCounter++;
  }
  
  }
    return arr;
  }
  
  
  let arr2 = [1,0,0,0,0,0,0,0,3,4,5,0,0,0,0,0,0,0]
  console.log(" pushToZeroEnd",pushToZeroEnd(arr2));
  
                        