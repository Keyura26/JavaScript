Promise.resolve(1)
    .finally((data) => {
        console.log("3", data)  // 3 undefined
        return Promise.reject('error');
    })
    .catch((error) => {
        console.log("7", error) //7  error
        throw 'error2'
    })
    .finally((data) => {
        console.log("11", data)  //11 undefined
        // return Promise.resolve(2).then(console.log);  // prints 2
        let rProm = Promise.resolve(2)
        let thenProm = rProm.then(console.log) // print 2
        return thenProm; //whatever is rejected from finally doesn't matter unless it is reject or throw an error
    })
    .then(console.log)
    .catch(console.log);  //catch will be executed with error2


//********************************* */
    // Promise.resolve(1)
    // .finally((data) => {
    //     console.log("3", data)  // 3 undefined
    //     return Promise.reject('error');
    // })
    // .catch((error) => {
    //     console.log("7", error) //7  error
    //     throw 'error2'
    // })

    
//***********************************/
// Promise.resolve(1)
// .finally((data) => {
//     console.log("11",data)  // 11 undefined
//     return Promise.resolve(2).then((value)=>{
//         console.log("13",value);  // 13 2
//     })
// })
// .then((data) => {
//     console.log("15",data)  // 15 1
// })
//  .catch(console.log)

 //*********************************/

Promise.reject(1).
    catch((err) => {
        console.log("3", err);
        return 10;
    })

    .then((data) => {  //here returned value of catch is taken by then as reject is resolved by taking value into catch
        console.log("15", data)
    })
    .catch(console.log);



/***
 * chain -> then-> promise above is resolved
 * catch -> promise of the above is rejected / throw an error
 * if you have mixture and either then returns a value / catch returns a value -> then will executed with the recieved value
 * finally -> finally works in both resolve or reject but  -> when you reject inside a finally then you upcoming catch will be called 
 * finally -> doesnot take any input / if you retrun either error/ rejected promise -> you need a catch to consume
 * 
 * **/
console.log("************");
Promise.reject(1)
    .finally((data) => {
        console.log("3", data)  
        return Promise.reject('error');
    })
    .catch(console.log)
    .then((data) => {
        console.log("15",data) 
        throw 'error2'
    })
    .catch(console.log);
