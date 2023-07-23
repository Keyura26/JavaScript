// console.log("Hello");

/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create 
 * **/

//******1. Object literal**************
// 1.when we create using object literal we get properties and methods, 
// we are directly creating an object that why its known as object literal
//when we create an object we get all the methods and properties apart from that we get Object(prototype)
//* 2. Object -> as your prototype (parent)
// let obj = {
//     name:"Steve",
//     address:{
//         state:"Newyork",
//         city:"Manhatten"
//     },
//     sayHi: function () {
//                 console.log(`${this.name} say's Hi`);
//             }
// };

// console.log("Object", obj);


/**
 * **************************Inbuilt object works ***************
 * For Non-primitives
 * 1. array -> Array(Object/class)
 * 2. function -> Function
 * 3. object -> Object 
 
* For primitive : temporary parent
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * *  null and undefined -> no parent
 * * etc 
 *     whenever you want to access any method or property
 *      then that  primitive is typecased as a 
 *      children of their respective parent class and 
 *      then that method is applied on that non primitive 
 *      you are returned the answer. -> autoboxing(internal typecasting)
 * (In Simpler words)It is typecasted temporarily as the children of those objects and then supplied with those functions 
 * */

/**** primitives */
//**For primitives we don't have any parent if we need functionality it adopts the child and then it leaves */
// Here str is primitive but it needs a function so internally js converts str into non primitive and 
// applies that function and will give the ans
// let str = "hi i am str";
// console.log(str);
// str.charAt(0);
// console.log(String.prototype);
// console.log(String);
//****

// let arr = [];
// console.log(arr);

/****
 * Most of the inbuilt object are children of Object
 * hirerachy : Inbuilt object 
 * Hierarchy order -> null->Object->all inbuilt objects
 *    null-> Object (All these are children of Object)
 *              Array->arr
 *              Function -> function
 *              String
 *              Number
 *              Boolean
 *              Symbol
 *   
 * */


/**********2.Object create(This is JS way of creating an object)******/

/****1. you create an object without any parent**/
// let obj2 = Object.create(null); //Here we are creating object with null which has top hierarchy among all
// obj2.name = "fake name";
// console.log(obj2);


/***
 * Inheritance : 
 *  1. unidirectional flow   of data 
 *        a. if you don not have a prop/method -> prototype chain
 *        b. if you have that -> you use your prop/method
 * **/

/********2. creating an object from another object*/


//If obj doesnot have any property it goes to its parent not children
let obj = {
    name:"Steve",
    address:{
        state:"Newyork",
        city:"Manhatten"
    },
    sayHi: function () {
                console.log(`${this.name} say's Hi`);
            }
};

let obj2 = Object.create(obj);//Create a obj2 with the parent obj or prototype obj
console.log(obj2);

/**overriden the name prop*/

// obj2.name = "symphony";
obj2.lastname = "rogers";
// console.log("1.", obj2.name," ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);
//Inheritance is topdown flow of data not bottom up flow of data

//is obj parent of obj2 ->true
console.log(obj.isPrototypeOf(obj2)); //true
//is obj2 parent of obj ->false
console.log(obj2.isPrototypeOf(obj)); // false

//  loop -> object -> for in loop -> iterate over all the prop of the object and also 
// inherited which are enumerable(visible) to for in
//it first prints own properties and then prints inherited properties

// for (let key in obj2) {
//     console.log("Keys are ", key);
// }


let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"]

// for(let key in obj3){
//     console.log("keys are",key);
// }

console.log(obj3); // its own object is printed first and then in prototype it prints inherited properties and methods

/********for in loop for your own properties******/

// 1.
for (let key in obj3) {
    let isMyKey = obj3.hasOwnProperty(key);
    if (isMyKey) {
        console.log("Keys are ", key);
    }
}


//2.
/**
 * object.keys -> normal loop
 * **/

//This line only prints the own properties of obj3
let keys = Object.keys(obj3);
let values = Object.values(obj3); //This only prints own values of obj3 in the form of array
console.log(values);

// for(let i=0;i<keys.length;i++){
//     console.log(i+" "+keys[i]);
// }
// console.log(keys);