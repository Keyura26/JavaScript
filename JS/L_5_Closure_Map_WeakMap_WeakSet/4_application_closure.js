//imp ques1
//Infinite currying
// function counter(args){
//      let count = 0;
//      count++;
//      if (args == 0) {
//         return count;
//     } else{
//         return function inner(args) {
//             count++;
//             if (args == 0) {
//                 return count;
//             } else {
//                 return inner;
//             }
//         }
//     }
// }

// console.log(counter(0))  //print 1
// console.log(counter()(0)) ////print 2
// console.log(counter()()(0))  // print 3
// console.log(counter()()()()(0))  // print 5


// code this function(HW)
// function sum(args) {
//     let ans=args==undefined?0:args;
//     if(arguments.length ==0){
//         return ans;
//     }
//     else{
//         return function inner(args1){
//             // ans = ans + args1;  //if we declare ans statement here when args1 is undefined it will consider ans as NaN
//             if(arguments.length == 0){
//               return ans;
//             }
//             else{
//                 ans = ans + args1; //only if args1 is not null we should add it to ans variable
//                 return inner;
//             }
//         }
//     }
  
// }



// console.log(sum());
// console.log(sum(3)()); //3
// console.log(sum(3)(4)());  // 7

// console.log(sum(3)(7)(8)()); //18 


function sum(args) {
    let ans=args==undefined?0:args;
    if(arguments.length ==0){
        return ans;
    }
    else{
        return function inner(args1){
            // ans = ans + args1;  //if we declare ans statement here when args1 is undefined it will consider ans as NaN
            if(arguments.length == 0){
                return ans;
            }
            else{
                 //only if args1 is not null we should add it to ans variable
                 ans = ans + args1;
                 return inner;
            }
        }
    }
  
}

console.log(sum(3)(4)(5));
/**
 * Memoization function
 * creating private variables
 * */

/***************Private variables******/
// function createEvenStack() {
//     // let items= [];
//     return {
//         items : [],
//         push(item) {
//             if(item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// console.log(stack.items);
// stack.items = [10, 100, 1000];
// console.log(stack.items);

// *****************
// function createEvenStack() {
//     //Because of closures we can create private variables that can be accessed on your own terms
//     let items= [];  //here we can access items object with the help of closure
//     return {
//         // items : [],
//         push(item) {      //Here inner push and pop function will have access to items object because of closure
//             if(item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop() {
//             return items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// console.log(stack.items); //undefined
// stack.items = [10, 100, 1000]; // prevent this behaviour
// console.log(stack.items);
//Here because of closures push and pop function will have access to items array
// but original function createEvenStack will not have access to items array


//imp ques 2
/**
 * Memoization : sum calculation take a lot of time  with 
 * memoization we can store  result of costly calculations -> useMemo
 * */

// function calc(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += n;
//     }
//     return sum;
// }

// console.time();
// let res = calc(700);
// console.log("res", res);
// console.timeEnd();

// function memorize(fn){
//     let cache = {};
//     return function(n){
//          //  cache -> res -> present
//     // let istheInputPresent = cache[n]==undefined;
//     // or
//     let istheInputPresent = Object.keys(cache).includes(n);
//     if(istheInputPresent){
//         return cache[n];
//     }
//     else{
//         const result = fn(n);
//         cache[n] = result;
//         return result;
//     }
//          //  it is not  -> call the actual fn and 
//         // add the res to the cache
//         //then return  the result

//     }
// }

// let efficentCalcFN = memorize(calc);
// console.time();
// efficentCalcFN(700);
// console.timeEnd();
// // console.log(memorize.cache=[100]);

// console.time();
// efficentCalcFN(700);
// console.timeEnd();