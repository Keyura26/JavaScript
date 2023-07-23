// high level view -> how your code exec
// stack -> callstack
let a = 10;
function fn() {
    console.log("I am fn");
    function inner() {
        console.log("I am inner");
    }
    inner();
}
fn()


//.......................................
console.log("a",A);
real();
var A=10;
// this can cause a bug
function real() { console.log("I am real. Always run me"); }
function real() { console.log("No I am real one "); }
function real() { console.log("You both are wasted"); }

console.log("a",A);
// memory allocation 
//  var a=undefined; 
//  real -> 3rd fn 
// First memory gets allocated only then code execution takes place
// Global Execution 
//     Browser - Window
    //    Node JS - Global

    //............................
    // Outer Scope
//   outer scope -> outer var
//   this -> always calculated
    let  AB=10;
function fn(){
    console.log("a",a);
}
fn();
               
