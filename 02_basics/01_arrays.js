//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["ramesh","suresh","jignesh","kalpesh"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[2]);//2
console.log(myHeroes);//[ 'ramesh', 'suresh', 'jignesh', 'kalpesh' ]

//Array Methods

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop() //will remove last element i.e 7
console.log(myArr); 

myArr.unshift(9)
console.log(myArr); 
//[
//     9, 0, 1, 2,
//     3, 4, 5, 6
//   ]
myArr.shift()
console.log(myArr); //removes 9

console.log(myArr.includes(2)); //true
console.log(myArr.indexOf(2)); //2
console.log(myArr.indexOf(9)); //-1


const newArr = myArr.join()
console.log(myArr);//[    0, 1, 2, 3,    4, 5, 6  ]
console.log(newArr); //0,1,2,3,4,5,6

//Slice , Splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3) //include 1 then 2 and exclude 3
console.log(myn1); //   [ 1, 2 ]

console.log("B ",myArr);
//A  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
//   B  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const myn2 = myArr.splice(1,3) //includes last value of range and it takes it out from original array
console.log("C ",myArr);
console.log(myn2);
//C  [ 0, 4, 5, 6 ]
//[ 1, 2, 3 ]
