var people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
]

// Get only the second item of the array (This is an example of destructuring an array)
// var [, second_person] = people;

// var { firstName } = second_person;
// console.log(firstName);

// Get all the first name
// function printAllTheFirstName() {
//   people.forEach(({ firstName }) => console.log(firstName));
// }

// printAllTheFirstName();

function getTheFullName() {
  //I can get the name of the parameter and assign it to any variable, in these case I'm getting the firstName and the
  //lastName parameters and assisgn there values to primeiroNome and sobreNome
  people.forEach(({ firstName: primeiroNome, lastName: sobreNome }) => {
    console.log(`Hello ${primeiroNome} ${sobreNome}, It's nice to meet you`);
  })
}

getTheFullName();
