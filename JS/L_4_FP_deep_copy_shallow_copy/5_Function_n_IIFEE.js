/**
 * functions are also objects
 * object : key : value pair  
 * */
// fn defintion
function fn() {
    console.log("Hi I am an fn");
    fn.count++;
}

//we can add a property to a function 

   fn.count = 0;
 
   fn();
   fn();

// we can add a method to a function
 fn.showCount = function () {
    console.log("count on fn  is ", this.count);
}
fn.showCount();
// function is an object that can also be called
// Every function is an object that implements callable constructor
console.log("----")
for (let key in fn) {
    console.log(key, ": ", fn[key]); // Here fn acta as a object
}
/***********/



// function are first class citizens in JS
// functions also behave as variables or objects in JS
// Assign a variable , pass a variable as a parameter, return a variable  

/******a. assignment***/
let a = [10, 20, 30];
let b = a;
/**fn experssion -> because function behaves like a variable **/ 
const addrFn = function () {
    console.log(" I am a variable that's why addrfn stores my address");
}
addrFn();

/**** b. pass a variable as a parameter*/

function fn(param) {
    console.log(" I recived a param", param);
    if (typeof param === "function") {
        param()
    }
}

function smallerfn() {
    console.log("I am smaller");
}

fn({ name: "Jasbir" });
fn(smallerfn);

//******************************/


//***********************/

/***HOF -> fn that accepts or returns a fn is called as higher order function  Bind is a higher order function */



//***********************/