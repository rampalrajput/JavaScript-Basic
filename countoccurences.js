

function countOccurence(str ){

    const charCount = {};
    const size = str.length;

    for(let i=0; i<size; i++){

        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

let str = "hello";

console.log( ' char occurences ',countOccurence(str));