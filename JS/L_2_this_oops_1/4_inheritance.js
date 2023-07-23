
// We use classes in Java script , internally it is an abstraction hence java developers can also do
// let arr = [1, 2, 3, 4];

// console.log(typeof(arr));
// arr.push("hello");
// console.log(arr);

// for arr, Array is the parent

// using an inherited property
// console.log(arr.toString());

/*********************************/

let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];

//***********bad way of giving a feature************//
//Here we need to use  same function for different objects i.e arrays for method call instead if we use sum function 
// with parent of arr = Array then using it once will be sufficient
// arr.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr.sum();

// arr2.sum = function () {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }


// arr2.sum();

//********************************************//

//***************To rectify bad way of giving a feature use Parent***************/
// property name - Array.prototype - Property you want to access to its children we can specify it using this syntax
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log(sum);
}
// usecase of this and prototype
arr.sum();
arr2.sum();
//********************************************/

// i am admant -> i will keep on my own -> borrow for once 
// bind , call ,apply