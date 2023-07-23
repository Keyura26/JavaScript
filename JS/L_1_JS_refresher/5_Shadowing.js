//Legal
let fruits = "apple";
console.log(fruits); // apple

{
    let fruits;
    console.log(fruits); //tdz  
    console.log(fruits);
    fruits = "orange"; 
    {
        console.log(fruits)
    }
    console.log(fruits);
}

console.log(fruits);

// Shadowing is basically where the inner variable shadows the outer variable
 // When there is nothing in outer scope then we ae going to move to outer scope even to the global area

 // illegal shadowing -> We cannot declare let outside and var inside as var has control of overall scope but it is not same in the case of let

// so var and let fighting for same scope 
//outer can go inside but inner cannot go outside

let fruits = "apple";
console.log("21",fruits); // apple
{ 
    let fruits;
    fruits = "orange";
    console.log("25",fruits);
    {
        var fruits;
        console.log("28",fruits)
    }
    console.log(fruits);
}
console.log(fruits);