//Accessing Objects the Old Way
let person = {
  firstName: 'Sonny',
  lastName: 'Sangha'
  currentAge: 28
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

personFirstName
personLastName

//Accessing Objects the New Way
let {firstName, lastName} = person;

firstName
lastName

//We can also RENAME the variables with the New Way
let { firstName: fName, lastName: lName} = person;
fName
lName

//setting defaults when object destructuring

let {firstName, lastName, middleName = '', currentAge: age = 20} = person;

console.log(middleName);//''
console.log(age); //28  used value instead of default in let

//Nested Objects
/* let member = {
  id: 01, 
  name: {
    firstName: 'Sonny',
    lastName: 'Sangha'
  }
}; */

let { id, name: {fistName, lastName}, name/*parent object*/} = member;

//destructure function argument in object

/* let displayFullName = (person) => `${person.firstName} ${person.lastName}`;

let person = {
  firstName = 'Hilary',
  lastName = 'Lindstrom'
};

displayFullName(person);
 */

//with ES6

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

let person = {
  firstName = 'Hilary',
  lastName = 'Lindstrom'
};

displayFullName(person);