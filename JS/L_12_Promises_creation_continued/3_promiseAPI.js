// function promSetTimout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("Hey then")
//         }, delay)
//     })
// }

// promSetTimout(1000).then((data)=>{console.log(data)})

const executorFn = (resolve,reject) => {
    setTimeout(function (){
        reject("Hey then")   //2s. then it calls resolve or reject assuming there is no then
    },1000);                   // and catch in CustomPromise function
}

//******************/
// const promise = new Promise(executorFn);
// console.log(promise);
// promise.then((data)=>{
//     console.log("resolved data is " +data)
// });

//****************/

// usage of your custom *****************
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(executorFn) {
    //    1. add required properties and methods
    // promise does not expose these properties  
     this.state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];
    // it will be attached to your object

    // 2 attach resolve and reject
    const resolve = (value) => {
        if (this.state != PENDING) return;  //3s if state is already resolved return
        this.state = RESOLVED;          // else assign state and value values
        value = value;
        // scb
        scbArr.forEach((cbs) => {    // call all the success call backs i.e all then attached to it
            cbs(value)
        })
    }
    const reject = (err) => {
        if (this.state != PENDING) return;  //4s if state is already resolved return
        this.state = REJECTED;           // else assign state and value values
        value = err;
        // fcb
        fcbArr.forEach((cbs) => {    // call all the failure call backs i.e all catch attached to it
            cbs(value)
        })
    }
    this.then = function (cb) {
        if (this.state === RESOLVED) {
            cb(value);
        } else {
            scbArr.push(cb);
        }
    }
    this.catch = function (cb) {
        if (this.state === REJECTED) {
            cb(value);
        } else {
            fcbArr.push(cb);
        }
    }
    //  3. call the executor fn
    executorFn(resolve, reject);
}
const myPromise = new CustomPromise(executorFn); //1s. calling custompromise function

// setTimeout(()=>{
//     console.log(myPromise); //to see this execution replace state with this.state
// },2000);

myPromise.then((data) =>{
    console.log(data);
})

myPromise.then((data) => {
    console.log("I am the second then");
})

myPromise.catch((err) => {
    console.log("90",err);  // 90 Hey then
})

//In short Promises is a data structure that you have built

//There are 4 moving parts into it then, catch , resolve , reject
//here myPromise is an object and we parse a function into it
//executor function also takes 2 functions, those  functions are responsible for the state
//lastly we need to call executor function so the async part is done
//then and catch are just to add call backs and to save the call back for later we have used array
//To make it private we used the variables with let and const