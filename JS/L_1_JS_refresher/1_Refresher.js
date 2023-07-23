console.log("Hello");
console.log("JS Execution");

//
// Fact-1 default of JS is always undefined
var myVar;
console.log("value of", myVar);
//

//
//  number -> similar to mathematical  -> 64 floating values
 console.log(5 / 2);  //2.5
//

// We only have strings in JS
let age = 25;
// no difference between single quotes and double quotes
let str1 = 'I am ' + age + " years old ";
console.log(str1);

// Problem : JS '' and "" doesn't support multiple line strings;
let templateString = `I am ${age} years old`;
console.log(str1);

// ***********typeof Operator***********************

var a = 10;
console.log("55", typeof a);
a = "string";
console.log("57", typeof a);
a = { "name": "Jasbir" };
console.log("59", typeof a);

//

// Fact-2 : JS -> just 10days -> netscape

//  it is a bug 
 console.log(typeof null); //gives object

 // typeof array -> object
console.log(typeof [1, 2, 3, 4]);

// correct way to check whether you are recieving array or object
let arr = [1, 2, 3, 4];
console.log(Array.isArray(arr));

//

//

