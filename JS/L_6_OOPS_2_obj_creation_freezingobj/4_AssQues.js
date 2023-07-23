// function Rabbit(name){
//     this.name=name;
// }
// Rabbit.prototype.sayHi = function(){
//     console.log(this.name);
// }

// let rabbit = new Rabbit("Keyura");

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

function A(){}

function B(){}

A.prototype = B.prototype = {}
console.log(A.prototype);

let a = new A();

console.log(a instanceof B); // It tells whether a object is an instance of a particular class