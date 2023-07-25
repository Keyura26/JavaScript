const fs = require("fs");

// // callback based usage
// fs.readFile("f1.txt", function (err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("data " + data);
//     }
// })

// function promissifyReadFile(filePath) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filePath, function (err, data) {
//             console.log("Hello");
//             if (data) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         })
//     })
// }

// promissifyReadFile("f11.txt")
//     .then((data)=>{    
//         console.log("data "+data);       // then and catch are the callbacks that are attached to a promise and they will go to the web API
//     })                 //thens callback will only go to web api when promise is resolved
//     .catch((err)=>{console.log("err is "+err)});  //catch callback will only go to web api when promise is rejected
    // (or)  .catch(console.log);

// fs.writeFile();
// fs.mkdir();
// fs.copyFile();

//If we create promise based function this way then we should create seperate promisify function
//for each inbuilt function to overcome this drawback in node js we have util 


//**************************/
// 1. promisify -> 
// input -> cb based fn
//  return   -> function and that function returns a promise
// const util = require("util");

// const promisifiedReadfile = util.promisify(fs.readFile);  // promisifiedReadfile is a function

// promisifiedReadfile("f1.txt")  //when we call this function we get a promise after which we canattach a then or catch
// .then((data)=>{console.log("data is "+data)}).catch(console.log);

//promisify is basically a utility function with this we can just pass a call back based function
// which returns a promise based function
//Inbuilt util.promisify is a part of only nodejs

//*************************/

//******** creating a own promisify function

// fs.readFile("f1.txt", cb);
// function cb(err, data) {
// //     if (err) {
// //         console.log("err", err);
// //     } else {
// //         console.log("data" + data);
// //     }
// // }

function ownPromisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            // passing my own cb  -> first will be an error / other params
            fn(...args, function (err, res) {   //function(err,res) is own callback
                if (err) {
                    resolve(err);
                } else {
                    reject(res);
                }
            })
        })
    }
}


// const promisefiedFS = ownPromisify(fs.readFile);
// promisefiedFS("f1.txt").then((data)=>{console.log("data "+data)}).catch((err)=>{console.log("err is "+err)})

//*******************************/
//HOF may be sync or syc that HOF receive arguments as well as call back , when we call HOF
//we are only assured when call back is called(it does the task and callback is called)
function HOF(delay, args1, args2, cb){
    setTimeout(function(){
        cb(args1 + args2);
    },delay);
}

// //  1. cb way of using my fn 
function cb(sum) {
    console.log("Hello", sum);
}
// HOF(1000,2000,3000,cb);
//*****************/

// const promisefiedFS = ownPromisify(fs.readFile);
// promisefiedFS("f1.txt").then(console.log).catch(console.log)

//promisified way of doing async programming
// const promisefiedVersion = ownPromisify(HOF);
// promisefiedVersion(1000,2000,3000).then(cb); // if we want to promisify code we have to pass call back into then
//and pass parameter whille calling the function, that function will return the promise for which we attached then
//and for that we attach a callback

// promisefiedFS("f1.txt").then((data)=>{console.log("data "+data)}).catch((err)=>{console.log("err is "+err)})
//**************************/




//**************************/

let obj = {
    HOF: function (delay, args1, args2, cb) {
        setTimeout(function () {
            cb(args1 + args2);
        }, delay);
    }

}


// obj.HOF(1000,2000,3000, cb);


const promisefiedObjectMethod = ownPromisify(obj.HOF);
promisefiedObjectMethod(1000, 2000, 3000).then(cb);


//**************************/