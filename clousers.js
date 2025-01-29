


function multiply(i){

    let result = i;

    function inner(num){

           result *= num;
    }
    return inner;
}

console.log(multiply(2)(3))

//console.log(multiply(2)(3))


/// clousers return

  function sum(a){

    return function (b) {

        return function (c){

            return function(d){

                return  a + b + c +d;
            }
        }
    }
  }

  console.log( " sum ", sum(2)(3)(4)(5))


   function createBase(num){
        return function add(val){
             return num + val
        }
   }

   const sum1 = createBase(3);

   console.log(" Total value",sum1(4));
   
   console.log(" Total value",sum1(50));

   
function callback1(){
    setTimeout( () =>{
        console.log( " Hello");
    },3000)
}

function Test(callback1){

    callback1();
    console.log(" My callback called");
}

Test(callback1);