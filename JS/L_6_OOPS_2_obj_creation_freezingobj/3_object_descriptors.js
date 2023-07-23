// Metadata -> object descriptors 
//We are able to see only value but object can have many more properties and behaviours basically.
// Those behaviours are actually metadata

// DATA  -> prop
//value -> value of that prop 
//Writable -> can you change 
//Enumerable -> whether we can log using for in loop(can we iterate over it or not )

//Js gives a opportunity to change behaviour of an object with which you can decide
//certain property is writable or not , updatable or not ,iterable or not

let obj = {
    name:"Keyura" 
}


Object.defineProperty(obj, 'test', {
    value: 'fail',
    enumerable: false
});

// console.log(obj);
// console.log(obj.test);

for(let key in obj){
    console.log(key); // prints only name as for test property enumerable is false
}

//with the help of these objects we will be able to create libraries on our own