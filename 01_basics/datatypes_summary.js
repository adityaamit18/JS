//Primitive

//7 types 
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

const id = Symbol('123')
const id2 = Symbol('123')
//they are uniquie when used symbol , lets check 
console.log(id===id2); //false


//Reference (Non Primitive)
/*
array
objects
functions
*/

//array
const heros = ["lol" , "lmao" , "rofl"];
 
//object
let myObj = {
    name:"kamlesh",
    age : 15,
}

//function
const myFunc = function(){
    console.log("namaste");
    
}

// +++++++++++++++++++ MEMORY

//Stack (Primitive) , Heap (Non Primitive)
//in stack , you get a copy

let myYou = "bhupendar"


let anothername = myYou

anothername = "chau"
console.log(myYou); //bhupendar
console.log(anothername);  //chau

//heap - u get a reference

let uone = {
    email : "lol@gmail.com",
    upi : "user@ybl"
}

let utwo = uone

utwo.email = "lmao@gmail.com"

console.log(uone.email); //lmao@gmail.com
console.log(utwo.email); //lmao@gmail.com

//stack me copy and heap me reference 
//reference means actual changes / updatess are in original value
