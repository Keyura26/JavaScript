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
        resolve("Hey then")
    },1000);
}

const promise = new Promise(executorFn);
console.log(promise);
promise.then((data)=>{
    console.log("resolved data is " +data)
});