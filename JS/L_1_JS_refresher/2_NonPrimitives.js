// function

//definition 
//..................
function fn(){
    console.log("Hello world");
}

// fn(); // Hello world

// let rVal = fn();

// console.log("return val",rVal) //rval is undefined

//...................

//...................
// function fn(param1){
//     console.log("Hello world",param1); //param1 is undefined
// }

// let rVal = fn(); //function call
// console.log("return val",rVal) //rval is undefined

//...................

//...................

function fn(param1) {
    console.log("Hello world!", param1);
    return "Returned value"; //for every line JS automatically invokes semi colon

}
// fn call
let rVal = fn();

console.log("return val is ", rVal);

//...................
// object ->  collection of key:value pairs

// key -> number, string
//value -> any valid JS 
//JS object represents an entity
//JSON object is a way to store data
// let cap = {
    // name: "Steve",
    // 'last Name': "Rogers",
    // isAvenger: true,
    // address: {
    //     city: "manhatten",
    //     state: "Newyork"
    // },
    // sayHi: function () {
    //     console.log("Cap say's HI");
    // },
    // movies: ["Avenger", "civile War"]
// }

// console.log("name is ", cap.name);
// // // sqaure bracket
// console.log("last name is ", cap['last Name']);
// cap.sayHi();
//........................


//..........................
let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}
for (let key in cap) {
    console.log(key, " ", cap[key], " ", cap.key);
}


// .operator -> literal operator 
// cap.key

// [] -> search for the value of the variable inside it 

//.........................