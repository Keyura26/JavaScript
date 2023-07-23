let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man",
}
// borrow the method only once with defined number of param 
// use petersTeam method -> only once 
cap.petersTeam.call(ironMan,"thor","loki");

/****
 * 
 * Apply: borrow the method only once with n no number of param 
 * **/
let membersArray=["thor", "loki"]
cap.petersTeam.apply(ironMan,["thor", "loki"]);
// or let membersArray=["thor", "loki"]  cap.petersTeam.apply(ironMan,membersArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

 const boundFn = cap.petersTeam.bind(ironMan);
 boundFn("cap", "war machine");
 boundFn(membersArray);

 // cap.petersTeam.call()





            //  Parent
// let arr=[] -> Array
// let obj ={} -> Object
// function fn(){} -> Functions