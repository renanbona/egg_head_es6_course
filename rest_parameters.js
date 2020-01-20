function Store() {
  var aisle = {
    vegetables: [],
    fruits: [],
  }

  return {
    add: function (category, ...items) {
      // console.log(items);
      items.forEach(function (value, index, array) {
        aisle[category].push(value);
      })
    },
    aisle: aisle
  }
}

var mySuperMarket = new Store();

mySuperMarket.add('fruits', 'apples', 'oranges');
mySuperMarket.add('vegetables', 'vegeta', 'goku');
console.log(mySuperMarket.aisle);