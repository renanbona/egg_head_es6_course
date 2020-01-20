// var d = new Promise((resolve, reject) => {
//   if (true) {
//     resolve('It works');
//   } else {
//     reject('erroooouuuu');
//   }
// });

// d.then((data) => console.log('Sucess:', data));

// d.catch((error) => console.log('Error:', error));

var d = new Promise((resolve, reject) => {
  if (true) {
    resolve('It works');
  } else {
    reject('erroooouuuu');
  }
});

d.then((data) => {
  console.log('Sucess:', data)
  // throw new Error('haha it fails');
  return '100 days of code rules';
})
  .then((data) => console.log('Sucess again', data))
  .catch((error) => console.error('Error:', error));
