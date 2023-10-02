/* let x = 10;
console.log(x); //10 Global Scope

if(true) {
  let x = 2;
  console.log(x); //2 Local Scope
}

console.log(x); //10 Global */


//Task 1 -vidoe #39 Understanding Javascript scope
let firstName = "Hilary";
let LastName = "Lindstrom";
let age = 37;

function student() {
  console.log(`${firstName} ${LastName} is ${age} years old`);
}
student();


//Task 2 & 3 - no problem with changing variables in both local and global scope

function student(){
  let firstName = "Hilary";
  let LastName = "Lindstrom";
  let age = 37;
  let country = "England";
  console.log(`${firstName} ${LastName} is ${age} years old and lives in ${country}.`);
}

firstName = 'James';

student();

//Task 4  
// 1-Mario local console.log
// 2-Sonic global console.log does not reference game in 
