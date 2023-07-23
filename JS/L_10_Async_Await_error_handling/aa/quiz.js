// function resolveAfterNSeconds(delay, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, delay);
//     });
// }

// (function () {

//     let a = resolveAfterNSeconds(1000, 1) //We will get a pending promise
//     a.then(async function (x) {
//         //1sec
//         let y = await resolveAfterNSeconds(2000, 2) //2 sec  as we used await
//         let z = await resolveAfterNSeconds(1000, 3) // after 1 more sec 
//         // 4sec
//         let p = resolveAfterNSeconds(2000, 4);  // Here both tasks are done parallely as there is no await
//         let q = resolveAfterNSeconds(1000, 5);
//         //4+2 = 6 sec
//         // p = await p;
//         // q = await q;
//         console.log(x + y + z + await p + await q);  // => 15 , 6 sec
//         /**
//          * literal meaning of await -> waiting for some result 
//          * if result is pdening -> wait
//          * if your result -> use 
//          * **/ 
//     })
// })()

async function getData() {
    return 10
}
let a = await getData();
console.log(a)
//we cannot use await outside of async as await feature is not provided by JS
//so we need async to make use of it