/*****setTimeout****/
// console.log("Before");
// function cb() {
//     console.log("Set timout cb has been called");
// }

// setTimeout(cb, 3000);

// console.log("After");

//***********clearTimeout*************/
//Clear Time out as name suggests it cancels set Timeout

// console.log("Before");
// function cb() {
//     console.log("Settimouts cb has been called");
// }
// const timerID = setTimeout(cb, 3000);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerID);
// }
// setTimeout(canceller, 2000);
// console.log("After");


//********setInterval********/
// console.log("Before");
// function cb(){
//     // 1/1/1970 to till now
//     console.log("Time Stamp is", Date.now());
// }

// setInterval(cb,1000);
// console.log("after");


//*********ClearInterval**************/

console.log("Before");
function cb() {
    console.log("Interval called ");
}
const timerId = setInterval(cb, 2000);

function cancelInterval() {
    // console.timeEnd();
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}
console.time();
setTimeout(cancelInterval, 5000);
console.log("after");

// timerId variable is outside of both the functions cb and cancelInterval hence 
// these 2 functions forms closure with timerId variable

//when cancelInterval gets its memory it forms closure with timerId

//Main Reason(Hoisting + Closure)

//We cannot do asynchronous programming effectively without closures

//setInterval is ntg but a infinite settimeout

//setTimeout has more precedence than setInterval thats the reason why
//for 3 sec setTimeout executes first and cancels the setInterval()
//so  Interval called is only called 2 times

//*************************/
         // Web API                      console-> before 
                                    //    cb -> SETINTERVAL : 1             after
                                    //  cancelcb->   setTimeout  :3        Interval called
                                                                        //    Interval called
// cancelcb
// callstack              
                    // cancelcb, cb
                         // queue

//*************************/                        

//  cb -> of setTimout -> higher precedence then cb of setInterval -> why precedence of SINt<STime