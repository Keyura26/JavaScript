// const fs = require("fs");


// const promise = fs.promises.readFile("f1.txt");
// const promise2 = fs.promises.readFile("f2.txt");

// //we use promise.all if we want to get output only after all promises are resolved

// const combinedpromise = Promise.all([promise, promise2]); // In combined promise we get ans in the form of array
// //Even if 1 promise fails this combinedpromise will also be rejected

// combinedpromise.then(function (resultArr) {
//     console.log(""+resultArr)
//     console.log(resultArr)
// })



// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.reject(4);

// // // resolve an reject 
// const promiseAll = async () => {
//     console.log("1");  // OP 1
//     const group1 = await Promise.all([promise1, promise2]);  //OP [1,2]
//     console.log("2",group1);
//     const group2 = await Promise.all([promise3, promise4]) //stops execution here as promise is rejected
//     console.log("3", group2);    // and as it is async function it returns rejected  
//     return [group1, group2]
// }

// promiseAll().then(console.log).catch(console.log); // OP 4 here catch will be executed with 4 as its rejected


//promise.any is a linient version of promise.all , even if either of the promises gets rejected it will give the answer

//Promise.any
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.resolve(4);

// // resolve an reject 
const promiseAll = async () => {
    console.log("1");
    const group1 = await Promise.any([promise1, promise2]);  //if both are resolved whichever resolves first that promise is considered
    console.log("2",group1);
    const group2 = await Promise.any([promise3, promise4])
    console.log("3", group2);
    return [group1, group2]
}

promiseAll().then(console.log).catch(console.log);