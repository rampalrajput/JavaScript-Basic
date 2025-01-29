

// shellow copy 

// Original object with nested properties
const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        zip: "10001"
    }
};

// Create a shallow copy using the spread operator
const shallowCopy = { ...original };

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

// Check the original object
console.log(original.address.city); // Output: "Los Angeles" (affected)
console.log(shallowCopy.address.city); // Output: "Los Angeles" (same reference)

// Modifying a top-level property in the shallow copy
shallowCopy.name = "Bob";

console.log(original.name); // Output: "Alice" (not affected)
console.log(shallowCopy.name); // Output: "Bob" (independent)



// deep clone of the object

let obj1 = {

    id :12,
    text: "javascript",
    city: "hyderabad",
    state : [
        {MP : "sakfa",
        UP : "dsfsf"
}]
}

let obj2 = obj1;

let deepClone = JSON.parse(JSON.stringify(obj1));

console.log(obj1 === deepClone);
console.log(obj1 === obj2);

console.log(" Deep Cloning ", deepClone);