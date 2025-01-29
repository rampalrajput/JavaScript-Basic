

const propertyName1 = 'keyadsdd';
const obj = {
      key: 'value' 
};

console.log(obj[propertyName1]);  //output => undefined
console.log(obj.key);           //output => 'value'

obj.propertyName1 = 'newValue'
console.log(obj) //output => {key:'value',propertyName:'newValue'} 