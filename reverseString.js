

 let text = " I am rampal"
 
 let newString = text.split(" ");
 
 let reverStrig ="";

 for ( let i=newString.length -1; i>=0; i--){
      
    reverStrig += newString[i] +" ";
 }

 console.log(reverStrig);

 //removeduplicatecharacter from string

 let newstring = "abcdedsdasfaf"

 let uniquestring = newstring.split("");
 let uniqueCharcterString = "";

let uniqueChar = new Set();

for(let i=0; i<uniquestring.length; i++){
    uniqueChar.add(uniquestring[i]);
    
}
console.log(uniqueChar);

for( let value of uniqueChar){
    uniqueCharcterString+=value;
}
console.log(uniqueCharcterString)

/// How to remove vowles from the String in javascript

function removeVowelsString(newString){
   newString ='';
   let chararray = newString.split('');

   for( let i=0; i< chararray.length;i++){
       if(chararray[i] === 'a' || chararray[i] === 'e' ||chararray[i] === 'i' ||chararray[i] === 'o' || chararray[i] === 'u' )
        continue;
       else
       newString +=chararray[i];
   }

   return newString;
   
}
console.log(removeVowelsString("abscdskfcaa"));