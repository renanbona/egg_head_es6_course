var deliveryBoy = {
  name: "John",

  handle_message: function(message, handler) {
    handler(message);
  },

  receive: function() {
    this.handle_message('Hello ', message => console.log(message + this.name))
  }
}

deliveryBoy.receive();

// without_arrow_funcion:


// var deliveryBoy = {
//   name: "John",

//   handle_message: function(message, handler) {
//     handler(message);
//   },

//   receive: function() {
//     that = this;

//     this.handle_message('Hello ', function(message){
//       console.log(message + that.name)
//     })
//   }
// }

// deliveryBoy.receive();
