// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;  // arr2 will have the address of arr
// arr2.pop();
// arr2 = 10;
// console.log(arr); // It will be referring to 10K address and the answer would be [1,2,3,4]

// function modifier(a, b) {
//     console.log("9", a, b) //[4,7,9] [3,6,8]
//     a = 10;
//     b = 20;
//     console.log("12", a, b) // 10 20
// }
// let p = [4, 7, 9]
// let q = [3, 6, 8]
// console.log("17", p, q);  //[4,7,9] [3,6,8]
// modifier(p, q)

// console.log("19", p, q);   //[4,7,9] [3,6,8]

//  what a reference is -> address or a pointer(basically a pointer)

// In JS everything is call by value ntg is call by reference

// call by value -> call by sharing

//  primitive -> value
// non primitive -> It stores the val of the reference (we are not passing the actual pointers or  references)

// JS(High level languages) doesn't expose pointers call by reference efficiently 

//Generally JS has call by sharing

//********************************************************//

//Heap is similar to SSD or Hard Disk and stack is similar to RAM

function modifier(a, b) {
    console.log("9", a, b)
    a[0] = 10; // It means change a[0] value in heap as a has 10k address in the stack
    b[1] = 20;
    console.log("12", a, b)
}
let p = [4, 7, 9] // variable p and q store the value of address of their respective arrays and non primitive array lives inthe heap
let q = [3, 6, 8] // If we assign someone value of a address or passas a parameter then the variable will just get the address
//and when the variable is removed changes made by it will also be removed but if the changes are done in the heap they will persist
console.log("17", p, q);
modifier(p, q)

console.log("19", p, q);  // as changes are done in the heap even here the changes will exist

//********************************************************//