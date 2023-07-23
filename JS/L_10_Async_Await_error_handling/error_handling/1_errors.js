/**
 * Inbuilt Errors in Java script
 * Syntax error
 * 
 * try catch only works with run time errors
 * Runtime error -> only get to know after executing the code and 
 * it will only fail on the line where we have made the error
 * typeError -> 
 * reference  Error
 * Range Error
 * 
*/

/**Syntax error -> Code does not execute at all*/
//1. unexpected identifier
// console.log("Hello");
// le a;

//2.Illegal Shadowing : Identifier 'a' has already been declared

// console.log("a");
// let a =10
// {
//    var a=20;
//  console.log("Hello",a );  
// }


/**********************Run time Errors************************/

/***
 * Reference Error
 * ***/

// 1. TDZ -> temporal Dead Zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a;


// console.log("Before");
// let obj={};
// obj.myMethod();

// 2. ReferenceError: fn is not defined
// fn();


// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict"; //for this it wont work as it considers window object in browser or empty object in node js
// // a=10
// // console.log(a);
// console.log(this); //in nodejs it gives empty object in browser it gives window object
// function fn(){
//     console.log(this.some);
// }
// fn();

//If it is property or method that falls into type error


/***Range Error***/

// 1. RangeError: Maximum call stack size exceeded stackoverflow  
// infinite recursion
// function foo() {
//     foo();
// }
// foo();


// 2. array size   RangeError: Invalid array length
// let a = [];

// a.length = 100**100
// console.log(a.length);


/*****
 * 
 * Type error: Invalid function invalid operation
 * 1.whenever a method is called and it does not exist 
 * 2. when you accessing a prop for which  object is undefined 
 * *****/

// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase()); //calling a function which is not applicable on that variable gives type error


// 2.TypeError: Cannot read properties of undefined (reading 'a')
//accessing a property over undefined also gives a type error
"use strict";
function fn() {
    let string = "hello";
    console.log(this);
    // console.log(this.a);
    // console.log(string.abc.def);
    // console.log(string.abc);
    console.log(this);
    console.log(this.abc);
}
fn();
