const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});
const secondPromise = new Promise((res, rej) => {
    // setTimeout(res, 100, 'two');
    setTimeout((arg) => {
        res(arg)
    }, 100, "two")
});

//If both have the same call out time the one which is called first is returned as answer
// from wherever you get the answer whichever gets resolved first we will get answer from it
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));