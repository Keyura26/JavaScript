// let cap = {
//     name: "Steve",
//     team: "Cap",
//     petersTeam: function (mem1, mem2) {
//         console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2}`);
//     }
// }
// let ironMan = {
//     name: "Tony",
//     team: "Iron Man"
// }
// cap.petersTeam("black panther", "Winter soldier");

//*****************************************************//
let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man"
}
cap.petersTeam("black panther", "Winter soldier");

// borrow a fn from another object and use it with different object
//this syntax is just used to call it
cap.petersTeam.call(ironMan,"Natsha","WarMachine");

// apply -> borrow for n number of paramters and we pass parameters into square brackets
cap.petersTeam.apply(ironMan, ["Natsha", "WarMachine", "doctor strange", "loki", "thor"]);

// bind -> copies function that you can call later with the Binded this object

// The main usecase of bind is react
let ironManStolenMem = cap.petersTeam.bind(ironMan);

ironManStolenMem("Natsha", "WarMachine", "doctor strange");

ironManStolenMem("loki", "thor")

// Call                                          Apply
// If we require them once or twice              If we require them once or twice
// If we know the parameters                     If we are not sure about no of parameters