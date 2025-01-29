let obj ={
    id : 12,
    text: "javascript"
}

let arr =[5,9 ,9,4 ,5];

// for(let i of obj.keys()){
//     console.log(i);
// } 
for(let j in obj.values){
    console.log(j)
}

Object.entries(obj).map(([key,value]) => {
  console.log( ` keys ${key} ${value}`)
})

