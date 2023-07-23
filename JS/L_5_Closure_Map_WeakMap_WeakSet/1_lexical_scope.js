console.log("Hello");


// var x = 10;
// function fn() {
//     /**
//      * you are taking the value from the current/local scope*/
//     var x = 20;
//     console.log("c Value of x is ", x);
// }

//This also works in the absence of varName
// window.varName="win"
// If varname doesn't get declared over here it will throw error as global object is not present even
var varName = 10;
/**fn def*/
function b() {
    console.log("in b",varName);
}


function fn() {
    var varName = 20;
    /**fn call*/
    b();
    console.log(varName);  //20
}

fn();
/**
 * b -> varName -> outer scope  -> fn defintion
 * fn  -> varName : 20
 * GEC -> varName : 10
 * 
 * JS says that outer scope is lexically scoped -> your fn definiton
 * */ 
