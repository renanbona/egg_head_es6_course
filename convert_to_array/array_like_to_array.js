var products = Array.from(document.querySelectorAll('.product'));

console.log(products);
products
  .filter(product => parseFloat(product.innerHTML) < 10)
  .forEach(product => product.style.color = "#F00");

console.log(products);
