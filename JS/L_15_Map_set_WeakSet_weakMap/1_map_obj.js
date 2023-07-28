/***
 * Object , Map -> store data in key, value pair
 * Map
 * */
/******** 1. syntax***************************/
const print = console.log
// a.
let cap = {
    name: "Steve",
    occupation: "Super Hero",
    age: 35
}

print("cap",cap);

cap.newProp = "Hello";
delete cap.name;

//finding size of an object
let arrKeys = Object.keys(cap); //object gives us an array of keys
let size = arrKeys.length;
console.log("size ",size)
// b. map
const personMap = new Map();

// adding/update a key in map
personMap.set('name', "Jasbir");
personMap.set("age", 35);
personMap.set('occupation', 'Super Hero');
personMap.delete("age");

// print("object",cap);

// print("map", personMap);

// print("size",personMap.size);

//*********Differences***//
/**1. Iteration*
 * Iterate over a map  - all the HOF , for of loop , for in loop does not work
 * Can't iterate over an object - HOF not applicable , for of loop not working , for in loop works
 *    
**/   
// a. forEach 
// let arr = [1, 2, 3, 4];
// arr.forEach(function (elem,idx) {
// print("Data at this idx", idx ," is ", elem)
// })

// cap.forEach((elem, key) => {   //throws a error cap.forEach is not a function
// print("key", key , " : ", elem); //as foreach cannot be looped over object
// })

// personMap.forEach((elem, key) => {   
//     print("key", key , " : ", elem); 
//     })

// b. for of loop
// for(let [key, elem] of personMap){
// print("key", key , " : ", elem);
// }

// for (let [elem, key] of cap) {   this throws an error as cap is not iterable
//     print("key", key, " : ", elem);

// }

// c.  for in loop
for(let key in personMap){   //this neither throws an error nor works
print("key", key , " : ", personMap[key]);
}
console.log("after map for in ")


for (let key in cap) {     //this works for an object
    print("key", key, " : ", cap[key]);
}

/******
 * Map -> keys can be of any type
 * Obj -> String , Number , Symbols
 * Usecase : when you want to store properties with a key that has some metadata
 * ***/

//  user -> mmultiple entries
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };
// const user3 = { id: 3, name: 'Charlie' };

// // // //  extended data 
// let preferenecsObj1 = { theme: 'dark', language: 'en' }
// let preferenecsObj2 = { theme: 'light', language: 'fr' }
// let preferenecsObj3 = { theme: 'dark', language: 'de' }

// let preferenceMap = new Map();

// preferenceMap.set(user1, preferenecsObj1);
// preferenceMap.set(user2, preferenecsObj2);
// preferenceMap.set(user3, preferenecsObj3);


// console.log("first Users name", user1.name);
// console.log("first users preference", preferenceMap.get(user1));

//******************************/

/******************object format of implementaion************************/

const user1 = {
    id: 1, name: 'Alice',
    pereferences: { theme: 'dark', language: 'en' }
};
const user2 = {
    id: 2, name: 'Bob',
    pereferences: { theme: 'light', language: 'fr' }
};
const user3 = {
    id: 3, name: 'Charlie',
    pereferences: { theme: 'dark', language: 'de' }
};

 //extended data 
// let preferenecsObj1 = { theme: 'dark', language: 'en' }
// let preferenecsObj2 = { theme: 'light', language: 'fr' }
// let preferenecsObj3 = { theme: 'dark', language: 'de' }

console.log("first Users name", user1.name);
console.log("first users preference", user1.pereferences); //with object form of implementation we need to perform 
// a lot of nesting

/********************************/


//  2. when you have lot update / delete -> amount of data set -> Map

console.log(cap);
console.log(personMap);


print("``````````````````");
let strMap = JSON.stringify(personMap);
console.log("strMap:" , strMap);  // Map can never be stringified
print("``````````````````");
 let strObj = JSON.stringify(cap);  //to apply JSON.string we need to use object
console.log("strObj:" , strObj);