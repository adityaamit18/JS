//singleton 

//object literals


//lets use a symbol
const mySym = Symbol("key1")

const JsUser = {
    name:"Bhupendra",
    "full name": "Bhupendra Jogi", //you wont be able to access by doing Jsuser.full name
    //mySym:"mykey1",
    [mySym]:"mykey1",

    age: 18,
    location : "jabalpur",
    email: "aditya@gmaul.com",
    isLoggedIn : false,
    lastLoginDays:["Mon","Sat"]
}


console.log(JsUser.email)//aditya@gmaul.com
//console.log(JsUser[email]) //ReferenceError: email is not defined
console.log(JsUser["email"]) //aditya@gmaul.

console.log(JsUser["full name"])//Bhupendra Jogi

console.log(JsUser.mySym) //mykey1 -- its datatype is string
console.log(JsUser[mySym]) //mykey1 -- symbol

/*
JsUser.email="bhupendrajogi@g.com",
Object.freeze(JsUser) //no changes would be made / locked
JsUser.email="bhupendra@"
console.log(JsUser);//bhupendrajogi@g.com //it will show the one from bhupendrajogi@g.com instead of line bhupendra@ because it got freeed at line33
*/


//using func
JsUser.greeting = function(){
    console.log("Namaste dunia");
}

console.log(JsUser.greeting);//[Function (anonymous)] -- 
console.log(JsUser.greeting());//Namaste dunia //undefined

JsUser.greet2 = function(){
    console.log(`Hello Js user,${this.name}`);
    
}

console.log(JsUser.greet2()); //Hello Js user,Bhupendra

