// import {a,fn} from "./lib_module.js";
// console.log("I am ", a);
// fn();

//***********************/

// import anotherVariable from "./lib_module.js";  //1st way to export default variable

// console.log("Hi I am default export of Lib",anotherVariable)


import libDefault from "./lib_module.js"; //2nd way to export default variable
//                                          // We can give any name for default variable
//                                          //there is only one default in a file

import lib1Default from "./lib1_module.js";  //We can import lib1Default file only once no need to import it multiple times
// console.log("Hi I am default export of Lib",libDefault)

//***************************/
// named exports
// import {a,fn} from "./lib_module.js";
// console.log("I am ", a);
// fn();

//**************************/

import * as obj from "./lib_module.js";   // * means we tend to import all named exports

console.log("I am ", obj.a);
obj.fn();

//***************************/

console.log("window in GEC",this);  // undefined as it is in strict mode
// b=50;
// console.log(b); // b is undefined as it is in strict mode