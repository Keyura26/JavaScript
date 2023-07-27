// what a proxy -> ?? it intercepots and modify get and set of an object

// server -> proxy -> client
        // (sends request 
        //  to the client)

        //using proxy we can use get and set directly on the object without even bringing into picture 
        // the objects

    // let obj = { eng: "Hello", eng2: "hi" };

// let handler = {
//     get(target, prop) { // target is an object , prop is property
//         // return true;
//         // return target[prop]; //hello
//         return target[prop].toUpperCase();
//         // console.log("10", target, prop, reciever);
//         // return target[prop].toUpperCase();
//     },
//     set(target, prop, reciever) {
//         // console.log(target,prop,reciever);
//         //***********/
//         // target[prop] = reciever;
//         // return true;
//         //************/
//         if(prop in target){
//             target[prop] = reciever;
//             return true;
//         }else{
//             throw new Error("Cannot add new property");
//         }

//     }
// }

// let proxy = new Proxy(obj, handler);
// console.log("eng1", proxy.eng);
// proxy.eng2 = "Hola";
// console.log(proxy);


//IIFEE

// let obj = (function(inpObj){
//     let handler = {
//         get(target, prop) { // target is an object , prop is property
//             // return true;
//             // return target[prop]; //hello
//             return target[prop].toUpperCase();
//             // console.log("10", target, prop, reciever);
//             // return target[prop].toUpperCase();
//         },
//         set(target, prop, reciever) {
//             // console.log(target,prop,reciever);
//             //***********/
//             // target[prop] = reciever;
//             // return true;
//             //************/
//             if(prop in target){
//                 target[prop] = reciever;
//                 return true;
//             }else{
//                 throw new Error("Cannot add new property");
//             }
    
//         }
//     }
//     let proxyobj = new Proxy(inpObj, handler);
//     return proxyobj;
// })({eng: "Hello", eng2: "hi"});

// console.log("eng1",obj.eng);
// obj.eng2 ="Hola";
// console.log(obj);


//*************************************/

function fn(inpObj) {
    let handler = {
        get(target, prop) {
            // console.log("10", target, prop, reciever);
            return target[prop].toUpperCase();
        },
        set(target, prop, reciever) {
            if (prop in target) {
                target[prop] = reciever;
                return true;
            } else {
                throw new Error("Cannot add new property");
            }
        }
    }
    let proxyObj = new Proxy(inpObj, handler);
    return proxyObj;

}

// directly pass the object without having any references 
let obj = fn({ eng: "Hello", eng2: "hi" });

console.log("eng1", obj.eng);
obj.eng2 = "Hola";
console.log(obj);


obj.eng4="fake";

//we can control get and set by ourselves using handler