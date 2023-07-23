let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2,...args) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2} with ${args}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

// cap.petersTeam.call()

/***************************************/

// call bind and apply - function parent
// Building a Polyfill

// function fn(){
//     console.log("Hello I am fn")
// }

// Function.prototype.myCall = function (){
//     console.log("Hi Call is invoked");
// }

// cap.petersTeam.myCall();

// fn.myCall();

/***************************************/
// Polyfill of call method

//Call - It is on function

Function.prototype.myCall = function (objOnWhichReqFnIsCalled,...args){  //acts as rest parameter as we are collecting all parameters we are getting we will collect them in a array and then spread it
    //fn is send as this
    // console.log("Hi Call is invoked");
    // console.log("value of this",this); //this here prints entire petersTeam function i.e the method on which we have to work on
  let requiredFn = this ;
  objOnWhichReqFnIsCalled.requiredFn = requiredFn;  // With this syntax we have called petersTeam function on ironoMan object
  objOnWhichReqFnIsCalled.requiredFn(...args);
  //To nullify this effect we need to do : delete the added function
// delete ironMan.requiredFn;
}
// cap.petersTeam.myCall(ironMan);
// cap.petersTeam = object here in this case
// console.log(ironMan); // Here we can find required function is added to the ironMan object
//call the function with required object
// ironMan.requiredFn("Tony","Guy");

// The function with which I am calling mycall -> polyfill
let peterteamFn = cap.petersTeam;
//with which function we are calling myCall
peterteamFn.myCall(ironMan,"a","b","c","d");
// ironMan.requiredFn("Tony","Guy");

// original one
cap.petersTeam.call(ironMan,"a","b")  // Now cap.petersTeam.myCall(ironMan) and cap.petersTeam.call(ironMan) works in the same fashion

/***************************************/

/****************************************/

Function.prototype.myApply = function (requiredObj, args) { // Here we are getting only one parameter in the form of array so no need to collect that
    // console.log("my Apply invoked ",args,...args)

    // fn we have to call
    const requiredFn = this;
    // call -> i want to call fn as it is part of the given object
    requiredObj.requiredFn = requiredFn;
    requiredObj.requiredFn(...args); // just need to spread that
    // delete the added fn
    // delete requiredObj.requiredFn
}

let peterTeamFN = cap.petersTeam;
// peterTeamFN.myApply(ironMan, ["loki", "thor","Ram"]);
// peterTeamFN.apply(ironMan,["loki","thor"]);

//If we use ...args anywhere else apart from function parameter it is spread

/****************************************/

Function.prototype.myBind = function (reqObj) {
    const requiredFn = this
    return function (...args) {    // Bind is basically a build up over call and apply where we are returning a function which will be called later
        requiredFn.call(reqObj,...args);
    }
}

//  bind a fn 
const boundFn = cap.petersTeam.bind(ironMan);
// call it later
boundFn("loki", "thor");

const myBounFn = cap.petersTeam.myBind(ironMan);
myBounFn("loki", "thor");

/***
 * 1. bind , call and apply -> are available on function
 * 2. use bind,call,apply in those fn -> this ->fn
 * 3. object passed to bind,call and apply -> on which you fn is called
 *   Either of these 3 will be adding permanently because we are using call function and apply which will delete the function associated with the object later 
 * To build bind we can use apply also 
* **/ 