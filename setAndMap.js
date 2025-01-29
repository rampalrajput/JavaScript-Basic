
//  javascript set and map example

let set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(2);
set.add("Hello");
set.add(null);
set.add('@');

console.log(" Set keys", set.entries());
console.log(" existing key or not", set.has(2));

// store the values in key and value pairs

let map = new Map();

map.set(1,"Hello");
map.set(2, "test");
map.set(2, "test");
map.set(2, "test");
map.set(3, "RAM");
map.set(4, " Rampal");

console.log( " Map key values pairs", map.keys(),map.values(),map.entries());

console.log( " find the values in map ", map.has(1,"Hello"));

//////////////////////////////////////////////////////////////////////////////////