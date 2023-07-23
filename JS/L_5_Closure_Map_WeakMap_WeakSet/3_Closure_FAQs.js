// Q1_1
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// //when we invoke this call it gets i value from closure which is 3 already
// arrFn[0]();  //OP 3 these 3 are calling/invoking fn function
// arrFn[1]();  //OP 3
// arrFn[2]();  //OP 3
// because of closure function fn will have access to arrfn and variable i
//by the time of last increment i will become 3

// ********************
// Q1_2
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// //when we invoke this call it gets i value from closure which is 3 already
// arrFn[0]();  //OP 4 these 3 are calling/invoking fn function
// arrFn[1]();  //OP 5
// arrFn[2]();  //OP 6

// ********************
// Q1_3
//fn is taking value from closure so i=3
// function outer() {
//     // arrFn here is block scope refers to function scope which means through out function we have only 1 arrFn
//     let arrFn = [];
//     let i=0;
//     for ( i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// //when we invoke this call it gets i value from closure which is 3 already
// arrFn[0]();  //OP 3 these 3 are calling/invoking fn function
// arrFn[1]();  //OP 3
// arrFn[2]();  //OP 3

// ********************
// Q1_4
//fn is getting different values of i because here 
//  block scope is different for every iteration
function outer() {
    // arrFn here is block scope refers to function scope which means through out function we have only 1 arrFn
    let arrFn = [];
    for (let i = 0 ;i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
//i=0
arrFn[0]();  //OP 0 these 3 are calling/invoking fn function
//i=1
arrFn[1]();  //OP 1
//i=2
arrFn[2]();  //OP 2

//Usually closure forms on Hoisting but here in this case i was not present when hoisting happened
// so when function fn is called it takes value of i from the block