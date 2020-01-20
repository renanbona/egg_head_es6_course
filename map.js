var myMap = new Map();

// API
// set()
// get()
// clear()
// has()
// size

myMap.set('name', 'Renan');
myMap.set('lastName', 'Bona');

console.log(myMap.get('name'));
console.log(myMap.get('lastName'));

console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

console.log(myMap.has('name')); //true
console.log(myMap.has('asdf')); //false

for (var key of myMap.keys()) {
  console.log(key)
  // "name"
  // "lastName"
}

for (var value of myMap.values()) {
  console.log(value)
  // "name"
  // "lastName"
}

for (var [key, value] of myMap.entries()) {
  console.log(`The key: ${key} has the value: ${value}`)
}

myMap.clear();

var myObj = {};
var myFunc = function () { };

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

for (var [key, value] of myMap.entries()) {
  console.log(`The key: ${key} has the value: ${value}`)
}