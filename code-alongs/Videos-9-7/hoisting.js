//Task 1 video  #40 Hoisting
book('The Magicians Nephew');

function book(title){
  console.log(`The book is called ${title}`);
}
//The book is called The Magicians Nephew

//Task 2 
console.log(book);

let book = 'The Silver Chair'; // "Cannot access 'book' before initialization"
//Solution---super simple version
let book = 'The Silver Chair';

console.log(book);