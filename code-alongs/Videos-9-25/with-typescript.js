//Basics
//Primitives: number, string, boolean
//Complex: arrays, objects
//Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives
var age; //lower case starting characters
age = 12.1;
/* age = '12';  */ //error because variable was set as number
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
//More Complex
//arrays
/*  let hobbies: string */ //single 
var hobbies; //or number[], etc.
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
var people; //creates an array of objects
//Type inference
var course = 'React - The Complete Guide';
/* course = 12341;  */ //error ts used type inference to infer that course is a string and not a number
// union type - able to have multiple types 
var sando = "Sandwich Town";
sando = 72;
var person;
//Functions & Types
function add(a, b) {
    return a + b;
}
//Generics <> attached to function, helps TS infer what types are being used
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3,]
var max;
max = {
    firstName: "Max",
    age: 32,
    greet: function () {
        console.log("Hello!");
    },
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!');
    };
    ;
    return Instructor;
}());
