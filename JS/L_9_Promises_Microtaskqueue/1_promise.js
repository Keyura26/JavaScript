const fs = require("fs");

/**
 * Promise based fn -> do not take  cbs
 * **/

console.log("before");
//task has started when fn is called
const promise = fs.promises.readFile("./f1.txt");
/**
 * Prints state of the promise -> pending
*/
console.log(promise);
console.log("After");

setTimeout(function(){
    console.log("I have read the file");
    console.log(promise);
},2000)