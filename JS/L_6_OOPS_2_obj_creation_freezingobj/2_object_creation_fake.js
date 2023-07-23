/****3 function constructor(before es6)*******************/

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
}

const keyura = new Person("Keyura", 24); // with new keyword we tell that we are getting an object from person class
let cap = new Person("Cap", 38);

console.log(keyura);
keyura.sayHi();
cap.sayHi();



//*******class Constructor(It was not available before ES6) (After ES6)********** */
// Advantages
// 1.class always works in -> strict mode
//2.We can use extends keyword 
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age=age;
//     }
//     //sayHi()
//     sayHi=function(){
//     console.log(`I am ${this.name} and ${this.age} years old`);
//     }
// }

// const person = new Person("Sita",27);
// console.log(person); 
// person.sayHi();

//******************************/

// class SuperHuman extends Person {
//     constructor(name, age) {
//         super(name, age) // we should definitely call super constructor before accessing this
//         //or returning from derived constructor
//     }
//     sayHI() {
//         console.log(`I am super Human called ${this.name} and ${this.age} years old`);
//     }
// }

// const superOne = new SuperHuman("Keyura",24);
// console.log(superOne);

// superOne.sayHI();


//**************Prototypal inheritance***************** */
//inheritance -> Advantages 1.Code sharing , saving memory

// * Prototype : 
// * In JS we create object from an object -> that object is your parent or prototype -> This chain goes on
//Any object from which you are being created is a parent or prototype

// Prototypal Inheritance : you inherit the properties from a parent object/ prototype 
// and that inheritance is called ->  Prototypal Inheritance.

//Protype Chain

let arr=[];

// the chain from the current object to null -> protoype chain
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); //Object
console.log(arr.__proto__.__proto__.__proto__); //null