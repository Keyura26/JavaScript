// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// // // assigning arr to copiedArr
// let copiedArr = arr; // value type and reference type both hold the same memory in the copied array
// console.log("arr",arr,copiedArr);

/***
 * array , object -> two types of values -> primitves-> values , non primitives -> reference
 * Assignment ->
 *  values ->  are not copied,
 * reference -> they are also not copied
*
* */

/****
 * shallow copy:
 * If we change anything on the copied array then original array will not be impacted on the first level but when we go inside another level the references are still same
 *  values - Values will be copied and they have different memories
 * references - new references will be created but the values inside the reference will be pointing towards same location
 */

//**********************************/
// Way no 1 to do shallow copy is spread
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];
// // spreadArray[2] = 100;
// // spreadArray[4] = 200;
// spreadArray[4][1] = 300;
// console.log("outputs ", spreadArray, arr);
//**********************************/

//**********************************/
// Way no 2 to do shallow copy is Object.assign
/**Object.assign**/
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };


// let copiedObject = Object.assign({}, person);
// // let copiedObject = { ...person };
// copiedObject.lastName = "Odinson";
// copiedObject.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", copiedObject);

/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */

/******************************/
// We are converting object into string and then it is word by word parsed into an object
// So the copied object is completly different and anything we do with this object doesnot impact our original object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};

 // convert obj to string 
let stringSyntaxOfobject = JSON.stringify(person);
// JSON.parse(stringSyntaxOfobject);
console.log(typeof stringSyntaxOfobject,stringSyntaxOfobject)
// /**deep copy -> object like string*/
let deepClonedObj = JSON.parse(stringSyntaxOfobject);

deepClonedObj.lastName = "Odinson";
deepClonedObj.address.street = "south 1st street";
console.log("person", person);
console.log("copiedObject", deepClonedObj);

//**************************************/
// Deep copy works with normal array as well

let arr = [1, 2, 3, 4, [10, 12], 5, 6];
let stringArr = JSON.stringify(arr);
const deepArr = JSON.parse(stringArr);
deepArr[2] = 100;
deepArr[4][1] = 300;
console.log("outputs ", deepArr, arr);

deepClonedObj.lastName = "Odinson";
deepClonedObj.address.street = "south 1st street";
console.log("person", person);
console.log("copiedObject", deepClonedObj);

//JSON.parse and JSON.stringify is the only way where deep copy works everywhere
//JSON.parse is the most costly operation so because of this catch we write our own deep copy
//If object is small we can prefer JSON.Stringify and JSON.parse but if the object is large we should go for creating
// our own deep clone function