/****
 * Synchronous code-> the code that excutes line by line
 * **/


// console.log("Before");
// function fn(){
//     console.log("I am fn");
// }
// fn();
// console.log("After");


/***
 * Asynchronous code -> piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 * 
 * 
 * */

// 1
// console.log("Before");
// // // 3
// function fn() {
//     console.log("I am fn");
// }
// setTimeout(fn, 2000);
// // // 2
// console.log("After");

// /****
//  * Enviornment : Browser
//     * Web API : //Browser has an component called WEB API which provides these features
//         * console -> is not part of JS
//         * window :  -> is not part of JS
//         * document : -> is not part of JS
//         * fetch : 
//         * eventListners -> not part of JS


// * Enviornment : Nodejs
//     * fs : nodejs
//     * Http : nodejs
//     * child_process : nodejs 

// * Thumbrule : 
// *  ->Enviornment :provides you the feature
// *  -> JS : provides the logic  // JS is part of environment and environment provides all the features
// and JS provides the logic JS is just an engine
// *  -> Programmer : 
// *          C++ -> Java -> pointer were taken care of in JAVA thats why JAVA is more preferred
// *          JAVA -> JS -> there are no threads to take care of in JS it is ease of usage
// *  Inference : You cannot create an asynchronous fns as a programmer -> Enviornment 
// Like JAVA has abstracted pointers JS has abstracted threads from the programming
// * */



// I/O of nodejs as well as I/O of your browser cannot take input using java script and 
// cannot put output using java script , it will be given by environment

//In Browser major chunk is Web API which provides all essential features and JS is just for Logic Part


//Be it Synchronous or Asynchronous the whole work up thing is managed by enviroment , we just need to write the logic

//once we write the code we can use it in different environment


//Performance wise no one can beat C/C++ but wrt code JS is easier to get things done


// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000); //This is not exact time it is minimum time to execute the code because of nature of environment
// console.log("After");
// // while (a) {
// // }   // I broke the while loop will not be printed in this case

// let timeInfuture = Date.now() + 5000;
// while (Date.now() < timeInfuture) {  // I broke the while loop will be printed in this case after 5sec
// }


//****************************/

console.log("Before");
const cb2 = () => {
    console.log("set timeout 1");
    // while (1) { // in this case cb1 will not be executed
    // }
    let timeInfuture = Date.now() + 5000;
while (Date.now() < timeInfuture){  //It will take 6 sec to execute cb2 as 1 sec in web API and 5 more while executing in call stack

}
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");