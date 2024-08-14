const score = 400

const balance = new Number(100)
console.log(balance); //[Number: 100]


console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); //100.00
console.log(balance.toFixed(4)); //100.0000

const otherNum = 123.8966

console.log(otherNum.toPrecision(3));  //124
// when 23.8966 >> 23.9
// 123.8966 >> 123
//1123.8966 >>1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US')); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//++++++++++ Maths ++++++++++++++

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); //4 ;absolute

console.log(Math.round(4.3)); //4
console.log(Math.round(4.5)); //5

console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(4,3,2,9)); //2
console.log(Math.max(4,3,2,9)); //9

console.log(Math.random()); //this gives a random value between 0 and 1 and 1 is excluded

console.log(Math.random()*10); //will give a value with oNES position
console.log((Math.random()*10)+1); //if we dont want 0 , we add 1
//for more precise value , we use floor
console.log(Math.floor(Math.random()*10)+1);

const min = 10; // Minimum value (inclusive)
const max = 20; // Maximum value (inclusive)

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Explanation:
// 1. Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
// 2. Multiplying by (max - min + 1) scales the random number to the range (0 to max-min+1).
// 3. Math.floor() rounds down to the nearest whole number.
// 4. Adding 'min' shifts the range to (min to max).





