/****
 *CallBack hell-> inital defintion
 *     1. Nesting of callbacks -> when we have have to do serial tasks using async fns 
 *     forms triangle like structure-> Pyramid of DOOM
 *      i want to read all the files serially
 * (A good programmer can solve it by removing nesting)
 *     2. Inversion of control : we send our callback function to an async fn and
 *  then that async fn has the control to call it(Trust issues)  
 * When call back hell is asked always answer inversion of control as answer
 * */

 //***********Heart attack code**************/
 let fs = require("fs");
console.log("Before");
fs.readFile("../f1.txt",function(err,data){ // ../ if the file is in parent folder
    if(err){
        console.log("Error",+err);
    }else {
        console.log("content "+ data);
        fs.readFile("../f2.txt",function(err,data){
        if(err){
            console.log("error "+err)
        }
        else{
            console.log("content "+data);
            fs.readFile("../f3.txt",function(err,data){
                if(err){
                    console.log("Error",err);
                } else {
                    console.log("content "+data);
                }
            })
        }    
        })
    }
})
console.log("After");


/*******************Readable code*************/

// let fs = require("fs");
console.log("Before");

/**
 * cbs -> trusting a third party library with your callbacks (readfile is 3rd party library) 
 * */
// This is a call back based function.It takes path of the file as well as call back and it does not return anything back
fs.readFile("../f1.txt", f1cb);
function f1cb(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("content " + data);
        fs.readFile("../f2.txt", f2cb);
    }
}
function f2cb(err, data) {
    if (err) {
        console.log("error " + err)
    } else {
        console.log("content " + data);
        fs.readFile("../f3.txt", f3cb)
    }
}
function f3cb(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("content " + data);
    }
}
console.log("After");