let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error(300));
    }, 2000);
 // All three set timeouts will be moved to Web Api and nxt line will be executed first
    resolve("some error");  //once the promise is resolved or rejected it will not consider further resolve or reject
    setTimeout(function () {
        reject(new Error(400));
    }, 2000);
    resolve("some error");
    setTimeout(function () {
        reject(new Error(500));
    }, 2000);
});




const fs = require("fs");
p.then(null, function (err) { //this is catch
    console.log(1);
    console.log(err);
});

p.catch(function (err) { // this is also catch
    console.log(2);
    console.log(err);
});

p.finally(function () {  // this is executed
    console.log("32", 1);
})

p.then(
    function (val) {
        console.log("44", val); // 44 some error
    },
    function (err) {
        console.log(err);   // this is not executed
    }
);
/**
 * finally does not take any arguments -> forwards the argument recieved
 * */

p.finally(function () {
    console.log("37", 2);
    // throw new Error("Hello");//these 2 lines are exception in finally catch takes this argument
    return Promise.resolve("some Error"); //then takes this returned promise
    // return Promise.reject("some Error"); // catch takes this returned promise
}).finally(function () {
    console.log("37", 2);
    return fs.promises.readFile("f1.txt");
})
    .then(function (val) {
        console.log("39", val);
    }).catch(function (err) {
        console.log("52", err);
    })



// Promise.resolve(1)
//     .then(() => 2)
//     .then((data) => {
//         console.log("54",data);
//         return 3
//     })
//     .then((value) => {
//         console.log(value);
        // return value * 3;
//     }
//     )
//     .then(console.log)

/**
 * finally does not take any argumenst -> forwards the argument recieved ->does not accept any value
 * either its resoved or rejected it keeps providing it
 * */

// p.finally(function () {
//     console.log("37", 2);   // 37 2
//     return 10;        // even if we return a value that will also be ignored
// })
// .finally(function () {
//         console.log("37", 2);  // 37 2
//         return fs.promises.readFile("f1.txt");
//     })
// .then(function(val){
//     console.log("39",val);  // 39 some error(ans is same even incase of return)
// })

// Promise.resolve(1)
// .then(() => 2) // it is same as return 2
// .then((data) => {
//     console.log("54",data);
//     return 3
// })
// .then((value)=> {
//     console.log(value);
//     return value * 3
// })
// .then(console.log)
// .then((value)=>{
//      console.log(value)  
//     // Promise.resolve(4)
// })