
function subString(str) {

    let size = str.length;
    console.log(" length", size)
    let set = new Set();
    for (let i = 0; i < size; i++) {

        for (let j = i + 1; j < size; j++) {
            // console.log(str.substring(i,j));
            set.add(str.charAt(i) + (str.charAt(j)));
        }
    }
    return [...set];

}

console.log(subString("abcd"));  // ab,ac,ad,ae,af,ac,af


function compression(str) {
    let tempArray = [...str];
    let compression = "";
    let map = new Map();

    tempArray.forEach((element => {
        map.set(element, ((map.get(element) || 0) + 1));
    }))
    console.log(map);

    for(let value of map.keys()){
       compression += value + map.get(value);
    }
    return compression;
}

console.log(compression("aaaabbbbcd"));

//-----------------------window sliding problem

function maximuArraySUM(arr,key){

    let maxSum = 0;
    let count = 0;
    let temp = maxSum;

    for(let i=0;i<arr.length;i++){
      
        if(key > i){
            maxSum +=arr[i];
            temp =maxSum;
        }
        else{
            temp = temp + arr[i] - arr[count];
            if(maxSum < temp){
                maxSum = temp;
            }
            count++;
        }

    }

    return maxSum;
}

let arr = [2,1,5,1,12,2], key=2;

console.log("Maximum Array SUM", maximuArraySUM(arr,key))

function firstNonRepeatCharacter(str){

    let arr = str.split("");

    let map = new Map();

    arr.forEach(element => {
            map.set(element, (map.get(element) || 0) + 1);    
    });
    //console.log(map);
    
    for(let [key] of map.entries()){

       if(map.get(key) === 1){
            return key;
       }
    }

}

let str ="rrammmmpalrajput"

console.log(" First Non Repating charcter",firstNonRepeatCharacter(str));