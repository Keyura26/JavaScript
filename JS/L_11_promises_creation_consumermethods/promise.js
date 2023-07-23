/***
 * What were issued with callbacks-> promises: inversion of control
 *   // cb based async fn -> cb to third party fns -> async fn can call your cb multiple times 
 *   // cb but here we send cb to the promise API : promise can be rejected or resolved once in the life time 
 * */

let fs = require("fs");
// // fs.promises.readFile("f1.txt");

 let promise = fs.promises.readFile("f11.txt");

//  /***then is an event listner (handler) for a promise when promise state changes to resolved***/

//  /*When we read the content using node js we usually get the buffer data but when we concatenate it its converted into string*/

//  promise.then(function (data) {
//     console.log("Hi the data is 15" + data);
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })

// promise.then(function () {
//     console.log("I am not accepting");
// })

// /****catch is an event listenre (handler) for a promise when promise state changes to reject***/

// promise.catch(function(err){
//  console.log("inside catch", err.message);
// })

// promise.catch(function (error) {
//     console.log("inside second catch", "no error message");
// })

/****
 * then takes two paramater -> both cb fns
 * first parameter -> is compulsary  and that is invoked when your promise is resolved
 * second parameter -> if present called when promise is rejected 
 * 
 * **/

promise.then(scb,fcb); // scb is success call back and fcb failure callback

function scb(data) {
    console.log("Hi the data is 15 " + data);
}

function fcb(error) {
    console.log("inside catch", error.message);
}