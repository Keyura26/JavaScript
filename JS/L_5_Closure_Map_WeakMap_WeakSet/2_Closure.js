/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent
 * even if outer fn is removed from the stack .
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * */

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction();
// console.log(innerFunc())  //OP 1
// console.log(innerFunc())  //OP 2


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5);  // c1 -> count (init=10, delta =5 )
// let c2 = createCounter(5, 2);

// console.log(c1())   // OP: 15 c1 -> count (init =15, delta =5); 
// console.log(c2())      OP: 7
// console.log(c1())   // OP: 20 c1 -> count (init =20, delta =5);
// console.log(c2())   // OP: 9

/***
 * Nested closure : you will get access to outer variable even if the 
 * outer fn is not your direct parent
 * */

// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         let iamINGEC = 400;
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
//             console.log("Hi GEC", iamINGEC) // Lexical scope  It takes the value of nearest variable defined
//         }
//     }
// }
 // getFirstName("Jasbir")("Singh")();  //shorthand
 
 //or(either of the 2 syntaxes exactly works in same manner)

 // const fnNameRtrn = getFirstName("Jasbir");
// // console.log(fnNameRtrn); // getLastname

// const lnNameRtrn = fnNameRtrn("Singh");
// // console.log(lnNameRtrn);  // greeter

// lnNameRtrn();

/**
 * Every code is executed in an EC : 
 * 1. this , 
 * 2. local fn and var , 
 * 3. global,window obj in case of browser
 * 4. lexical scope
 * 5. closure -> till GEC
 *  closure is something similar to lexical scope
 * */

// GEC is the lowest execution context if that is removed the code will seize to exist

/***
 * Application of closures 
 * 1.  currying : taking one input at a time and you use the input later 
 * 2. asynchrounous code cannnot run without closure 
 * **/

/*get all the inputs at once -> we can execute the code */
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${firstName} ${lastName}`); 
// }
// greeter("Jasbir", "singh");

// ***This is a example of currying
function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
        }
    }
}

const getLastName = getFirstName("Jasbir");

console.log("Task in Between");

const greeter = getLastName("Singh");

console.log("Task in Between");

greeter();


console.log("Before");
function cb() {
    console.log("I will explode");
}
setTimeout(cb, 2000); //setTimeout takes a particular function and calls that function after a delay of given time
console.log("After");

//What JS does is it calls this function and ignores it and moves ahead and after 2 sec is done it executes the function

setTimeout(function(){
console.log("5 sec Timer"); //anonymous function setTimeout
},5000);

// When GEC was formed call back is hoisted and forms closure over variable a

// without call backs either promises nor call backs can be used
