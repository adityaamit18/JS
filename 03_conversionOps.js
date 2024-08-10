let score = "33"

console.log(typeof score);//string
console.log(typeof (score)); //string

let valueinNumber = Number(score) 
console.log(typeof valueinNumber); //number

let experi="abc45"
console.log(experi); //abc45

let valueinTry = Number(experi)
console.log(typeof valueinTry); //number
console.log(valueinTry); //Nan

let score1 = null
console.log(score1); //null
console.log(typeof score1); //object
let valuescore1 = Number(score1)
console.log(valuescore1); //0

//for boolean True=1 False=0
/*
"33" >> 33
""33abc >> Nan
*/

let isLoggedIn = 1
let boolisLogIn = Boolean(isLoggedIn)
console.log(boolisLogIn); //true
// if u write empty string "" >> false 
// "aditya" >> true

//********************operations***************

let value = 3
let negvalue = -value
console.log(value);
console.log(negvalue);

console.log(2+2);
console.log(2**3); //power
console.log(50%10);

let s1 = "bhupendar"
let s2 = "jogi"
let s3= s1+s2
console.log(s3); //bhupendarjogi

console.log("1"+2+2); //122
console.log(1+2+"2"); //32
console.log(1+"2"+2); //122

console.log(+true); //1
// console.log(true+); //error

