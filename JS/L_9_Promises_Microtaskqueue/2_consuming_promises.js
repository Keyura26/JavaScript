const fs = require("fs");
console.log("before");

/**
 * Promise based function never takes callback, it takes the input and returns a
 * promise and the value/state of the promise -> promise based function(value of promise depends 
 * upon creater of promise )
 * */

// fs.promises.readFile function gives the token so it decides what should be the future value
//and when the task is done or similarly when the task is failed
// promises.readFile decides what should be the state and what should be the value
//This is promise based function , this function doesnot take call back and gives a promise back
const promise = fs.promises.readFile("./f11.txt");
/**
 * Prints state of the promise -> pending
*/
// console.log(promise);
console.log("After");

/**
 * then is  an event listener over promise it triggers fn when promise is resolved (task is done)
 * promise also gives method name then
 * **/

/**
 * Event listeners promise.then and promise.catch will be removed from the stack and moved to 
 * Web Api area . As soon as promise is resolved promise.then is called and when it is rejected
 * promise.catch is called
*/
// As soon as we are waiting for this promise to resolve at same instance then calls this function and sends parameter to it
//lets say after 5 sec the promise will already have the result
//and then directly we can receive that result

//then and await are just event listener they are just waiting
//for promise to be resolved
promise.then(function(futureValue) {
    console.log("Data inside the file is "+futureValue);
})

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */

promise.catch(function (err) {
   console.log("err",err);
    })

//readFile is part of node API not Web Api