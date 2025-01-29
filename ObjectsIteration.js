
let obj ={

    id :"text",
    language :"Javascript"
}
// console.log(obj);

let arr = [1, 2, 3, 4, 5]

for( let key in obj)
{
    console.log( ` ${key} ${obj[key]}`)
}
for( let key in arr)
    {
        console.log( ` array vlaue = ${key}`)
    }