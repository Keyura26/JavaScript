

const fs = require("fs");
console.log("before");

const promise = fs.promises.readFile("./f1.txt");

console.log("After");


/**Consumption of promise*/
// await only works inside a  function with async keyword
(async function (){  //we can use function name as fn and call it using fn();
    try{
        const data = await promise;
        console.log("Data inside the file is"+data);
    }
    catch(err){
        console.log("err",err);
    }
})();

// fn();

// promise.then(function(futureValue) {
//     console.log("Data inside the file is "+futureValue);
// })


// promise.catch(function (err) {
//    console.log("err",err);
//     })

