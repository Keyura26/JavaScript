let fs = require("fs");

// console.log("before");
let promise = fs.promises.readFile("./f1.txt");

console.log("before");
let rVal =(async function(){
    try{
   let data = await promise;
   console.log("content"+data);
   let data1 = await fs.promises.readFile("./f2.txt");
   console.log("content " + data1);
   let data2 = await fs.promises.readFile("./f3.txt");
   console.log("content " + data2);
   return "rVal from fn";
    }
    catch(err){
        console.log("err:"+err)
    }
})();
 
 rVal.then(function (data) {
    console.log("content 22 " + data);
})
console.log("rValue from 25",rVal);
console.log("After");
//***Async function is ntg but a function that returns the promise */
// async keyword function is ntg but the function which is
// enclosed of promise and it doesn't wait
// promise
//     .then(function (data) {
//         console.log("content " + data);
//         return fs.promises.readFile("./f2.txt");
//     }).then(function (data) { //then treats the before returned value as promise for this then
//         console.log("content " + data);
//         return fs.promises.readFile("./f3.txt");
//     }).then(function (data) {
//         console.log("content " + data);
//     }).catch(function (err) {
//         console.log("error " + err);
//     })

// console.log("after");

//Whenever we call a async function that gives a promise
//always awaits for its answer

// To receive a return value from any async keyword function
//always use a then or await for the answer

/*****
 * async keyword fn always return a pending promise so either use await or use then 
 * 
 * After when we use try or catch it will give resolved value
 * **/ 