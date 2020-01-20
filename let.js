// var message = 'Hi';

// {
//   var message = 'Bye';
// }

// console.log(message)
// output bye

let message = 'Hi';

{
  let message = 'Bye';
}

console.log(message);
// output Hi

// This happens because the let keyword has a scope wich can be inside of any block,
// like a for loop for instanceof, and the var keyword has a global scope so if you
// redeclare the variable with the same name, it`ll be overwritten.
