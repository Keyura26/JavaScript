function runMlalgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payment done");
        cb();
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}


function pRunMLalgo() {
    return new Promise((resolve, reject) => {
        console.log("running ml algo");
        console.log("processing payment");
        setTimeout(function () {
            console.log("payment done");
            resolve();  //promise acts as a blackbox inn aeroplane once it is resolved it becomes a black box 
            //its not going to have effect on any further resolves or any further rejects 
            resolve();
            resolve();
            resolve();
            resolve();
            reject();
        }, 1000);
    })
}

//black box stores the recording of the conversions in the flight and as soon as accident happens
// it freezes itself and no other changes is done to it

//micro stack queue acts as a business to call stack i.e it has more priority than call back queue

//micro stack queue is a queue in which call backs of promises go

module.exports = {
    runMlalgo,
    pRunMLalgo

}