//Basics
//Primitives: number, string, boolean
//Complex: arrays, objects
//Function types, parameters

//Primitives

let age: number;  //lower case starting characters

age = 12.1;
/* age = '12';  *///error because variable was set as number

let userName: string;

userName = 'Max';

let isInstructor: boolean;
 isInstructor = true;


 //More Complex

 //arrays

/*  let hobbies: string */ //single 
 let hobbies: string[];  //or number[], etc.

 hobbies = ['Sports', 'Cooking'];


 //objects

/*  let person: { // ts allows 'any' value
  name: string;
  age: number;
 };  

 person = {
  name: 'Max',
  age: 32
 };
 */
 let people: { 
   name: string;
   age: number;
  }[];  //creates an array of objects

  //Type inference

  let course = 'React - The Complete Guide';
  /* course = 12341;  */ //error ts used type inference to infer that course is a string and not a number

  // union type - able to have multiple types 
  let sando: string | number | boolean = "Sandwich Town";

  sando = 72;

//Type Alias  create a new type

type Person = {
  name: string;
  age: number;
}

let person: Person;

//Functions & Types

function add(a: number, b: number) { //type infered
  return a + b;
}

//Generics <> attached to function, helps TS infer what types are being used

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3,]

//Classes  public and private properties

//Interfaces object type definition   interface-->implement

interface Human {
  firstName: string;
  age: number;
  greet: () => void; //no parameters and returns nothing 
}

let max: Human;
max = {
  firstName: "Max",
  age: 32,
  greet () {
  console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!');
  };
}