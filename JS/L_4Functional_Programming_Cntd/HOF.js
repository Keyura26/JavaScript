/**
 * Problem : What is problem
 * What are HOF
 *  Different Inbuilt HOF 
 * */

// let arr = [2, 3, 4, 5];
//  following DRY
// code to square every element in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
// }

// // code to cube every elemnt in the array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr",arr);


// function transformer(arr, logic) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let ans = logic(arr[i]);
//         newArr.push(ans);
//     }
//     return newArr;
// }
// // // smaller 
// function squarer(elem) {
//     return elem * elem;
// }
// function cuber(elem) {
//     return elem * elem * elem;
// }

// const squaredArr = transformer(arr, squarer);
// const cubedArr = transformer(arr, cuber);

// console.log("squaredArr", squaredArr);
// console.log("cubedArr", cubedArr);

/***
 * HOF  -> are the function that accepts a fn as a parameter or returns a function
 * Callbacks -> function that are passed as a paramtere to another are known as cb fns. 
 * They usually be called by HOFns 
 * squarer and cuber are call back functions in this context
 * Actuall array will not get effected with any of these higher order functions
 * */

/***
 * HOF -> majorly available on arrays
 *  these fn doesn't change the source array
    * foreach -> 
    * Map -> 
    * filter -> 
    * reduce -> 
    * sort -> 
 * */

/***traversal(forEach) -> it is used to travsrese the arr*/
// foreach - It will just print the output will not return anything
// let arr = [2, 3, 4, 5];
// method 1
// function printELem(elem) {
//     console.log(elem * elem);
// }
// let rVal = arr.forEach(printELem)


// method 2
// let rVal = arr.forEach(function(elem){
//     console.log(elem*elem);
// })
// console.log(rVal);

/***************Map-> It changes every element according to the cb fn*****/
//Map creates a new array and add the elements changes into those and return the new array
let arr = [2, 3, 4, 5];
function squarer(elem) {
    return elem * elem;
}
function cuber(elem) {

    return elem * elem * elem;
}
// //for each will not return anything and map will return the array
// let squaredArr = arr.map(squarer);
// console.log("squaredArr", squaredArr);
// let cubedArr = arr.map(cuber);
// console.log("cubedArr", cubedArr);

/**Polyfill of map*/
Array.prototype.myMap = function (logic) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let ans = logic(this[i]);
        newArr.push(ans);
    }
    return newArr;
}

let arr2 = [10, 20, 30]

let squaredArr = arr.myMap(squarer);
console.log("squaredArr", squaredArr);
let cubedArr = arr2.myMap(cuber);
console.log("cubedArr", cubedArr);

// *******************************************//

/*********************filter -> it filters the elem on the basis of testLogic**/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/

// let elems = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }

// let oddvaluesArr = elems.filter(isOdd);
// console.log(oddvaluesArr);
// let eleGtrthan5 =elems.filter(isgtr5);
// console.log(eleGtrthan5);

/**write ployfill of filter -> HW*/

//***************************************/

/*********************reduce******************/
let elems = [1, 2, 3, 4, 5];


// function sum(acc, elem) {
//     return acc + elem;
// }
// function product(acc, elem) {
//     return acc * elem;
// }

//  const sumValues = elems.reduce(sum);
// console.log("sum", sumValues);
// const prodValues = elems.reduce(product);
// console.log("prod", prodValues);


//***************************************/
// **********Most imp Polyfill of reduce//

/***Intution polyfill of reduce**/

// cb 
function sum(acc, elems) {
    return acc + elems;
}
function product(acc, elems) {
    return acc * elems;
}
// function reducer1(arr, cb) {
//     let acc = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         acc = cb(acc, arr[i]);
//     }
//     return acc;
// }

// const sumVal = reducer1(elems,sum);
// console.log("sumVall", sumVal);
// const prodVal = reducer1(elems,product);
// console.log("prodVal", prodVal);

//*********************************/
/**final version-> polyfill of reduce**/
// Array.prototype.reducer = function(cb) {
//     let acc = this[0];
//     for (let i = 1; i < this.length; i++) {
//         acc = cb(acc, this[i]);
//     }
//     return acc;
// }

// const sumVal = elems.reducer(sum);
// console.log("sumVall", sumVal);
// const prodVal = elems.reducer(product);
// console.log("prodVal", prodVal);

//***********************************/

/**final version-> polyfill of reduce(another way by passing default value)**/
Array.prototype.reducer = function(cb,defVal) {
    let acc = defVal!=undefined?defVal:this[0];
    for (let i = defVal!=undefined?0:1; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
}

const sumVal = elems.reducer(sum,10);
console.log("sumVall", sumVal);
const prodVal = elems.reducer(product,100);
console.log("prodVal", prodVal);

//***********************************/
//reduce doesn't work with arrow function as arrow function take this from outside. It doesnot bother whether the call is made 
// with an object or without an object.So when we are using this we should always be creating a normal function

/*****sort -> is a hof -> by default -> sort -> alphabatically*/

/*string -> dictonary sort*/
var animals = ['hen',
    'elephant',
    'llama',
    'leopard',
    'ostrich',
    'whale',
    'octopus',
    'rabbit',
    'lion',
    'dog'];

// let sortedArr = animals.sort();
// console.log(sortedArr);

let numArr = [1, 2, 3, 4, 5, 11,];
// const sortedArr = numArr.sort();
//here it just does the dictionary sort
// console.log("sortedArr", sortedArr); //  [1, 11, 2, 3, 4, 5]

function sortHelper(a, b) {
    /**increasing order*/ 
    return a-b;
// for decreasing order return b-a
}

let sortedArr = numArr.sort(sortHelper);
console.log("sortedArr", sortedArr);

//***********Functional Programming*/
// FP is basically a different paradigm 
// Three ways of doing it

// 1.OOPS - We create a class and an object to it.For that particular property we create a method and property

// 2.Imperative way - is straight away writing the code without class,methods,objects.

// In this two ways we change original data that can be an object or array and we are aware of what logic we need to perform

// 3.Functional Programming -  functions dont change the source data
//                              Having higher order functions that can help writing complex logic
//                              with the help of call back functions
//                              Apart from these there is a term known as pure function

// These things in combination are known as functional programming

// In simpler words code is breaken into different functions and functionality is built with the
// help of smaller functions which are part of bigger function. - Higher order functions
//For a given parameter if a function returns the same parameter as output it is known as pure function

// Pure functions,higher order function call backs - all these are part of functional programming