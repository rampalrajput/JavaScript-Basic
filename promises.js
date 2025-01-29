
console.log(" Promsises Examples //");

const promises = new Promise( (resolve, reject) => {

    let val = 20;
    if(val == 20){
        resolve(" Promises Resolved");
    }
    else{
        reject(" Promises Rejected345");
    }
})
const promises1 = new Promise( (resolve, reject) => {

    let val = 20;
    if(val == 21){
        resolve(" Promises Resolved 1");
    }
    else{
        reject(" Promises Rejected 1");
    }
})

const promises2 = new Promise( (resolve, reject) => {

    let val = 20;
    if(val == 22){
        resolve(" Promises Resolved 2");
    }
    else{
        reject(" Promises Rejected 2");
    }
})
/*
promises.then( element =>{
   console.log(element);
})
.catch((e)=>{
console.log(e);
})

promises1.then((element =>{
    console.log(element)
}))
.catch((element=> {
    console.log(element);
}))
promises2.then((element =>{
    console.log(element);
}))
.catch((element=>{
    console.log(element);
})) */

Promise.all([promises,promises1,promises2])
    .then((value) =>{
       // console.log(value);
    })
    .catch((element =>{
        console.log(element);
    }))

Promise.allSettled([promises,promises1,promises2])
    .then((value) =>{
        //console.log(value);
    })
    .catch((element =>{
        console.log(element);
    }))

Promise.any([promises,promises1,promises2])
    .then((value) => {
       console.log("promises any" ,value);
    })
    .catch((element => {
 
    }))

Promise.race([promises,promises1,promises2])
    .then((value) => {
       console.log("promises race" ,value);
    })
    .catch((element => { 
    }))    

 /* let allresultSetaled = Promise.allSettled[promises,promises1,promises2];

console.log(' allSettled results ',allresultSetaled);

let anyPromises = Promise.allSettled[promises,promises1,promises2];

console.log(' All any results ',anyPromises);


let allRaces = Promise.allSettled[promises,promises1,promises2];

console.log(' Allrace results ',allRaces); */

