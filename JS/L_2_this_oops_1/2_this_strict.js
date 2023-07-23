 //in non strict mode if we declare a variable without var it will still print it
 varName="Jasbir";
window.varName="Arron";
console.log(varName);
 
// In strict mode without declaration using any variable is restricted
"use strict";
// varName="loki";
// console.log(varName);

/*****************question1***********************/
//In strict mode using method call sayHiAdd will give us undefined 
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
// // console.log(this)
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi(); // this is Steve
// let sayHiAdd = cap.sayHi;
// // var firstName = "loki";
// sayHiAdd(); // this is undefined

/*********************question 2***********/
// "use strict";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("47", this.firstName); 
//         const iAmInner = function () {
//             console.log("49", this.firstName); // 49 Undefined
//         }
//         // EC by this kind of call -> undefined
//         iAmInner();
//     }
// }

// // EC by this -> ?? -> cap
// cap.sayHi(); // 47 Steve

// ***************question 3***************//
// "use strict";

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName); 
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const iAmInner = () => {
//             console.log("55", this.firstName); // 55 Steve
//         }
//         iAmInner();
//     }
// }
// cap.sayHi(); // 53 Steve

// *******************question 4********************
"use strict";
let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("91", this.firstName);
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = () => {
                console.log("95", this.firstName);
            }
            iAmInner(); // 95 Steve
        }
        subInner(); // 94 Steve
    }
}
cap.sayHi(); // 91 Steve