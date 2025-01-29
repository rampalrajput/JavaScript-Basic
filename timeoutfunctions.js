
const timeout = () => {

console.log("Start");

setTimeout(()  =>{
    console.log(" set Timeout ");
 })
console.log(" END")


setImmediate(() => {
 console.log(" Set Immediate timer out ")
})


console.log(" After Immedate function");

process.nextTick(() => {
    console.log('Inside nextTick');
});
}

timeout();