/***********chaining your then and catch**********/

// const fs = require("fs");
// console.log("before");

// const promise = fs.promises.readFile("./f1.txt");

// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
//     .catch(function (err) {
//         console.log("err", err);
//     })

// console.log("After");


/*******************nested then*************/

// let fs = require("fs");
// console.log("Before");
// /**
//  *
//  * */
// let promise = fs.promises.readFile("./f1.txt");
// promise.then(function (data) {
//     console.log("content "+ data);
//     const p2 = fs.promises.readFile("./f2.txt");
//     p2.then(function (data) {
//         console.log("content "+ data);
//         const p3 = fs.promises.readFile("./f3.txt");
//         p3.then(function (data) {
//             console.log("content "+ data);
//         })
//     })
// })

/*******************chaining *********************/

let fs = require("fs");
console.log("before");
let promise = fs.promises.readFile("./f1.txt");
promise
    .then(function (data) {
        console.log("content " + data);
        return fs.promises.readFile("./f2.txt");
    }).then(function (data) { //then treats the before returned value as promise for this then
        console.log("content " + data);
        return fs.promises.readFile("./f3.txt");
    }).then(function (data) {
        console.log("content " + data);
    }).catch(function (err) {
        console.log("error " + err);
    })
console.log("after");