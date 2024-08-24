const marvelheros = ["thor","hulk","yoda"]
const gog = ["drax" , "groot","rocket"]

//marvelheros.push(gog)
// console.log(marvelheros); //[ 'thor', 'hulk', 'yoda', [ 'drax', 'groot', 'rocket' ] ]
// console.log(marvelheros[3][1]); //groot

// const allHeros = marvelheros.concat(gog)
// console.log(allHeros); //[ 'thor', 'hulk', 'yoda', 'drax', 'groot', 'rocket' ]

const allNewHeros = [...marvelheros,...gog]
console.log(allNewHeros); //[ 'thor', 'hulk', 'yoda', 'drax', 'groot', 'rocket' ]

const anotherArr = [1,2,3,[4,5,6],7,[6,7 , [4,5]]]
const real_another_arr = anotherArr.flat(Infinity) //infinity is depth

console.log(real_another_arr);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */


console.log(Array.isArray("soapapdi")) //false

console.log(Array.from("soapapdi")) 
/*[
  's', 'o', 'a',
  'p', 'a', 'p',
  'd', 'i'
] */

console.log(Array.from({name : "bhupendar"})); //[] empty arr

let s1 = 100
let s2 = 200 
let s3 = 300
console.log(Array.of(s1,s2,s3)); //[ 100, 200, 300 ]

