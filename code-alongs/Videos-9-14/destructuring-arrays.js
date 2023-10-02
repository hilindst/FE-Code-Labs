//Before ES6, when you want to assign the elements of the array to variables, you typically do it like this:
/*const arr = [1, 2, 3];
let x = arr[0];
let y = arr[1];
let z = arr[2];

x
y
z */

// New Method: ES6 array destructuring syntax way to assign elements of an array to variables:

const arr = [1, 2, 3];

let [x, y, z] = arr;

x
y
z

//left hand side is variables, right hand array of values
let [a, b, c, d] = [1, 2, 3, 4];//a:1, b:2, etc

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers', 'Ham'];

const [x, a, , ...y] = names;
console.log(x); //Sonny
console.log(a); //Jay
console.log(y); // [Brian, Rodgers, Ham]