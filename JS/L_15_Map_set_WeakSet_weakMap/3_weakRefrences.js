/********Q1***************/

// let jhon={};
// jhon.age=25;
// console.log("John 5", jhon);
// jhon=null;
// console.log("John 7", jhon);


/**********Q2*************/

// let jhon = {};    

// jhon.age = 25;
// let arr = [jhon];
// console.log("John 13", jhon);  //{ age: 25 }
// jhon = null;     // jhon points to stack variable not the heap variable
// console.log("John 15", jhon);  //null
// console.log("John 17", arr[0]); // { age: 25 }
// arr[0] = null //this points to heap variable which makes it as null

// stack                          Heap
// 1.  john                          john =10k
//                                  john.age = 25
//                                  arr address(20k) => [10K]
//    john =null                              

/****
 * Garage collection : when an unused type  -> object ,value etc -> they are not in use then 
 * JS's Garbage collector removes it from the memory and frees up the memory for further usage
 * 
 * Ques How do you define whether a type is unused -> 
 * Mark and sweep algorithm -> identified unused types and then remove them  -> if a type is not 
 * refering to any other type/var/ array
 * 
 * **/

/***********************
 * Map and strong refreences
 * 
 * ******************/


// let john = { name: "John" };

// let map = new Map();
   // where we added a object as a key
// map.set(john, "hi"); //john is set as key inside map so there is no way to access it
// john = null; //since we have deleted outer object there is no way to access inner object
// console.log("in map",map); 
// console.log("48",map.get(john)); // so now there is no way to access it without iteration

//To mitigate these kind of values we use weak map

/****
 * WeakMap : In weakMap you cannot have primitives a key
 * weakMap.set(key, value)
      weakMap.get(key)
      weakMap.delete(key)
      weakMap.has(key)
 * 
 * */
// let john = { name: "John" };
// let john2 = { name: "steve" };
// let weakMap = new WeakMap();
// weakMap.set(john, "hi");
// weakMap.set(john2, "Bi");
//  john = null;  //Once the outer object is removed from the stack the object which is stored in the weak map
//                                       // inner object will automatically removed
// console.log("in map", weakMap);
// console.log("48", weakMap.get(john));
// console.log("48", weakMap.get(john2));

let weakMap = new WeakMap();
weakMap.set("100", "hello"); // invalid key as it a primitive value for weak map we can only have the objects