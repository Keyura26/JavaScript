// in js num datatype -> 64 bit 

let num = 1000000^1000000 ;
console.log(num);  // 

// if you want to store a value that is greater then 2^63-1 use bigInt
// BigInt is stored in your heap , It is a primitive

// 1
let bigNum = BigInt(1000000) * BigInt(10000000);

console.log("big num", bigNum);  //100000000000n if there is n in the end its a big int number


// //2
let bigNUm1 = 10000000000000000n;
let bigNUm2 = 12345768n;
let res = bigNUm1 * bigNUm2;
console.log("product", res);


// let div = res / 10000;  //this gives us an error as we cannot mix big int we normal data type
// console.log("div", div);


/****** 
 * symbols  : used to create unique primitives that are never equal
//  * usecase-1
        when you want only to add or delete a property from an object but not  update it we use symbols
 *     hide it during iteration -> you have to use symbol
 * */

// non primitives are compared by-> references 
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4,]
console.log(a == b);
// primtive are compared by-> value
let str1="Hello";
let str2="Hello";
console.log(str1 == str2);


let sym = Symbol("hi");
let sym2 = Symbol("bye");
console.log("symbol", sym);
console.log("symbol", sym2);
console.log(sym==sym2);  // false symbols will never be equal


//*****************************/
let obj = {
    "key1": "Hello",
    key2: "hi",
    [sym]: "Private"  // To hide a symbol during iteration we can use symbols [sym]
}

for(let key in obj){
    console.log(key ," : ", obj[key]);
}

console.log("54",obj[sym]);
//**********************************/
// let id = Symbol("id");
// let name = Symbol("name");

// let obj ={
//     [Symbol("id")] :1234,
//     // id: 1234,
//     name: "Hello"
// }

// // //  -> you only want to add/delete  property but you don't want to update it 

// // obj["id"] = "fake";
// // console.log(obj);

// let id1 = Symbol("id");
// //only added as no previous property is updated
// obj[id1] = "fake";
// obj[name] = "Fakename";

console.log(obj);