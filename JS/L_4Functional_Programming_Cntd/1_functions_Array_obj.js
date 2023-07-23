/**
 * functions -> objects in JS
 * Array -> Object in JS
 * Object -> group Key :value pairs
 * */

/*fn definiton*/
// function fn() {
//     console.log("Hi I am a fn");
// }

// /*fn behaves as an object*/
// fn.number = 1;
// fn.printCount = function () {
//     console.log("count is ", this.count);
// }

// console.log(fn);

/*function call*/ 
// fn();

/**
 * fn as an object -> function is an object that implements callabale constructor i.e
 * fn is an object which you can also call
 * Significance -> function are known as first class citizens -> function can be treated as normal variables
 *
 * */

/**
 * variables -> assign a variables ref /value to another variable
 * */

// let arr=[10,20,30];
// let arr2=arr;  //arr2 holds the address of arr
// console.log("arr2",arr2);

/**Function expression - this is not possible inside java*/
//** Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments. */
// const fnAddress = function () {
//     console.log("Hello i am a fn  expression");
// }
// fnAddress();

/**
 * variables ->passed as a param
 *          -> pass a fn as param
 * */

//******************************/
// // function fn(param) {
// //     console.log("param is ", param); //[Function: param]
// // }

// fn("Hello");
// fn([1, 2, 3, 4]);
// fn({ name: "Jasbir" });

// function smaller() {
//     console.log(" I am smaller");
//     return "hello";
// }

// fn(smaller);

//*****************************/

//*****************************/
// function fn(param) {
//     console.log("param is ", param); //[Function: param]
//     param();
//     return "From outer fn";
// }

// // fn("Hello");
// // fn([1, 2, 3, 4]);
// // fn({ name: "Jasbir" });
// function smaller() {
//     console.log(" I am smaller");
//     return "hello";
// }
// fn(smaller);
//*****************************/

//*****************************/
// function fn(param) {
//     console.log("param is ", param); //[Function: param]
//     const rValue = param();
//     console.log("rValue is ", rValue);
//     return "From outer fn";
// }

// // fn("Hello");
// // fn([1, 2, 3, 4]);
// // fn({ name: "Jasbir" });
// function smaller() {
//     console.log(" I am smaller");
//     return "hello";
// }
// fn(smaller);
//*****************************/

/**
 * variables ->variables can be returned 
 *          -> fn can also be returned from a function 
 * */

//*****************************/
function fn() {
    console.log(" I am fn I am returning a fn");  //1
    return function inner() {
        console.log("Returned from fn");  //2
    }
}
 const Rval = fn();
//  console.log("Rval",Rval);
 console.log("Rval",Rval());
//  console.log("Rval"+Rval);
//If function doesnot return anything we get undefined in return in js

//inner
//GEC Rval -> inner
//call stack
//*****************************/

/**
 * fn -> are objects -> we can add prop , methods to it
 * fn are objects-> assign them , pass them as  a param , retrun them
 * */

real();
//this can cause a bug this is a function statment 
function real(){console.log("I am real. Always run me");}
function real(){console.log("No I am real one ");}
function real(){console.log("You both are wasted");}

//instead of this use function expression. Here we cannot create multiple function with same name

// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }


/****************Arrays*********/

// In C++ or Java array is collection of homogenous data type elements
//In JS array is collection of anything(valid JS Data type)

let arr = [
    1,
    1.1
    , true,
    null,
    "Hello",
    [1, 2, 3, 4, 5],
    { name: "Jasbir" },
    function sayhi() {
        console.log(" I am a fn inside an array")
    }
]

console.log("arr",arr);
console.log(arr[5][2]);
console.log(arr[6]["name"]);
console.log(arr[6].name);
arr[7]();

/**traverse array*/
// for (let key in arr) {
//     console.log("key : ", key, "value : ", arr[key]);
// }
//*****************************/
arr["Hello"] = 200;
for (let key in arr) {
    console.log("key : ", key, "value : ", arr[key]);
}

console.log(arr[25]); // undefined
arr[30] = 600;
console.log("144",arr.length);//length is 31
arr["Hello"] = 200;
console.log("146",arr.length); // length is 31
//Because length is calculated based on last numeric index
arr[78] = 600;
console.log("148",arr.length);

// length -> lastnumericidx+1;

/**length -> no Index out of bound error  -> introduces bugs*/
// In JS  length doesn't give index out of bound error so thats why we use map , filter and reduce
// and avoid using for loops in JS

/**
 * Arrays are object diguised as an array -> key are numbers 
 * */