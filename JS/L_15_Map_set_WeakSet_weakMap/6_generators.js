

function* fn() {
    console.log("Before first Yield");
    console.log("Before first Yield");
    console.log("Before first Yield");
    yield 10;

    console.log("before second yield");

    yield 20;
    console.log("after second yield");
}

let genrator = fn();
console.log("Before");
// It starts from fn and stops till yeild10
console.log("res of first yield", genrator.next().value); //when we call generator.next it will execute the code until yield 10 and pauses there
console.log("Between");
console.log("res of first yield", genrator.next().value); //it will start from where it has been paused i.e from yield 10

// console.log("res of first yield", genrator.next().value);
console.log("res of first yield", genrator.next().value); //to execute line no 12 we need to call this line again
// as it pauses only until line no 11

let extraStr = "HI";
let extTempString = `${extraStr}`;
console.log(extTempString);
