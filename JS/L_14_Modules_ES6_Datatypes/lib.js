var a=10;   // var a will have access accross the file 
let private = "Hello";

function fn() {
    console.log("Hi I am Fn");
}

setTimeout(()=>{
    console.log(a); // a is printed as 100 as we reassigned a to 100 in client.js file
},2000)        // to avoid such kind of hampering we use modules
console.log(a);

