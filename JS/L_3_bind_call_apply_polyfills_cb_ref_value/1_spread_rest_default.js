/**
 * default parameter 
 * **/

// function fn(param1, param2, param3= "default" ) {
//     console.log("Hi params are ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello"); // Hi Hello Undefined
// if param3 = default
// fn("Hi", "Hello");

//**********************/
//By making changes in the 2nd array the initial array will also get changed
// With assignment operator reference remains the same
// let arr = [1, 2, 3, 4, 5];

// arr2 and arr has the same ref
// let arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("contest arr", arr);
 
//****************************//

//*****************************//
// By using spread the changes made in the second array will not be reflected in the initial array
// spread operator : copies value,ref from on array to another for only first level
// let arr = [1, 2, 3, 4, 5];

// let arr2 = [...arr];
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("contest arr", arr);

//*****************************//

//*****************************//
// By using spread the changes made in the second array will not be reflected in the initial array
// spread operator : copies value,ref from on array to another for only first level
// let arr = [1, 2, [3, 4],4,5];

// let arr2 = [...arr];
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;  //spread will be successful here
// // arr2[2][0] = 200; // spread fails here i.e data of arr2 will be copied to arr(original array)
// console.log("contest arr", arr,"modified arr",arr2);

//*****************************//

//******************************//
let a=10;
 //we will get the copied value -> primitive types 
let b=a;



let arr=[1,2,3,4];
// you get the ref - non primitive types
let arr2=arr;


// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]

// let arr2 = [...arr];
//******************************//

//*******************************//
/***
 * rest -> It is used as paremeter of fn .
 *  used to collect remianing parameters numbers of params. It stores the remaining parameters in the form of array
 * ***/

function fn(param1, ...param2) {
    console.log(" params are ", param1);
    console.log("Rest paramaters",param2);
}

fn("Hi", "Hello");
fn("Hi", "Hello", "Hola");