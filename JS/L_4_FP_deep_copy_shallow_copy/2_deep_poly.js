/*********************************/
// This is given object make a copy of it
//This code works for one level only
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// function superClone(obj){
//     // create new object
//     let newobj = {};
//     // copy all the keys and values
//     for(let key in obj){
//         newobj[key] = obj[key];
//     }
//     // return the copied obj
//     return newobj;
// }

// let deepClonedObj =  superClone(person);
// deepClonedObj.lastName = "Odinson";
// // deepClonedObj.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", deepClonedObj);

/*********************************/


/*********************************/
// This is given object make a copy of it
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// function superClone(obj){
//     // create new object
//     let newobj = {};
//     // copy all the keys and values
//     for(let key in obj){
//         newobj[key] = obj[key];
//     }
//     // return the copied obj
//     return newobj;
// }

// let deepClonedObj =  superClone(person);
// deepClonedObj.lastName = "Odinson";
// // deepClonedObj.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", deepClonedObj);

/************************************/
//    Deep clone if we have an object inside the object
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// }

// function superClone(obj) {
//     //    create new object
//     let newobj = {};
//     // copy all the keys and values
//     for (let key in obj) {
//         let isKeyObj = typeof obj[key];

//         if (isKeyObj == "object") {
//             let newSmallCopiedObj = superClone(obj[key]);
//             newobj[key] = newSmallCopiedObj
//         } else {
//             newobj[key] = obj[key];
//         }
//     }
//     //   retrun the obj
//     return newobj;
// }

// let deeplyClonedObj = superClone(person);
// deeplyClonedObj.lastName = "Odinson";
// deeplyClonedObj.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", deeplyClonedObj);

/***************************************************/


/************************************/
// What if the object has array and nested objects inside nested array too
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
//     // solution is combination of deep polyfill and flatten an array
//     friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
// }

// function superClone(obj) {
//     //    create new object
//     let newobj = {};
//     // copy all the keys and values
//     for (let key in obj) {
//         let isKeyObj = typeof obj[key];

//         if (isKeyObj == "object") {
//             // if(Array.isArray(isKeyObj)){
//             //     let newArray = [];
//             //     for(let value in isKeyObj){
//             //         newArray.push(value);
//             //     }  // first level shallow copy and next level again call the method
//             // }else{
//             let newSmallCopiedObj = superClone(obj[key]);
//             newobj[key] = newSmallCopiedObj
//             // }
//         } else {
//             newobj[key] = obj[key];
//         }
//     }
//     //   retrun the obj
//     return newobj;
// }

let deeplyClonedObj = superClone(person);
deeplyClonedObj.lastName = "Odinson";
deeplyClonedObj.address.street = "south 1st street";
console.log("person", person);
console.log("copiedObject", deeplyClonedObj);

/***************************************************/

/** Questions that can be asked
 * simple deep clone/copy
 * deep copy /clone with nested objects and array HW
 * flatten an array 
 * Array.prototype.flat() HW
 * flatten an object HW
 * */

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}


person = {
    firstName: 'John',
    lastName: 'Doe',
    "address.street": 'North 1st street',
    "address.city": 'San Jose',
    "address.state": 'CA',
    "address.country": 'USA',
    "address.postCodes.firstBlock": 10,
    "address.postCodes.secondBlock": 12
}