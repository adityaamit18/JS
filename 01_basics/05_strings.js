const name = "bhupendra"
const repocount = 40

console.log(name + repocount + "jogi"); //bhupendra40jogi

// we use back ticks `` adnd ${}
console.log(`Hello my name is ${name} and my rc is ${repocount}`);

const gameName = new String('dharampal-singh-chadda')
console.log(gameName[3]); //r
console.log(gameName.__proto__); // {} ; itis visible in console

console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //DHARAMPAL
console.log(gameName.charAt(5)); //m
console.log(gameName.indexOf('m')); //5

//slice
const newString = gameName.substring(0,6)
console.log(newString); //dharam

const anotherString = gameName.slice(-1,4) //can take negative values
console.log(anotherString);

const s1 = "   shyam       "
console.log(s1);        //   shyam
console.log(s1.trim()); //shyam

const url = "https://lmao.com//hitesh%20choudhary" // %20 is space
console.log(url.replace('%20','-')) //https://lmao.com//hitesh-choudhary
console.log(url); //https://lmao.com//hitesh%20choudhary

console.log(url.includes('sundar')) //false
console.log(url.includes('hitesh')) //true

//lets split dharampal-singh-chadda in three parts of array 

console.log(gameName);
console.log(gameName.split('-'));

