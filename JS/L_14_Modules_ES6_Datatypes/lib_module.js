// you can choose which data you want to make accessible
// and what to hide
// let abc = "Hello";
// export function fn() {   //syntax no1
//     console.log("Hi I am Fn"); 
// } 
    
// function fn() {   
//     console.log("Hi I am Fn",abc); //suppose we want to restrict abc variable to only this file we can do that
// }      
//suppose we want to restrict abc variable to only this file we can do that
                             //without using export
    //export var a = 10;  //syntax no1


//*********************/
var a=10;
function fn() {   
    console.log("Hi I am Fn");
}
export {a,fn};   //syntax no 2 thse are named exports

//*********3rd way to export************/
//Default export

let anotherVariable ="another"
// if anyone imports my file -> by default my another variable will be exported
export default anotherVariable;

//exports should be at last in the file