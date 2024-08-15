let myDate = new Date()
console.log(myDate); //2024-08-14T14:40:11.922Z ;not readable

console.log(myDate.toString()); //Wed Aug 14 2024 20:10:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Wed Aug 14 2024
console.log(myDate.toLocaleString()); //14/8/2024, 8:11:35 pm
console.log(typeof myDate); //object

let myCreatedDate = new Date(2024,0,23) //month start with 0
console.log(myCreatedDate); //2024-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); //Tue Jan 23 2024

let date1 = new Date(2024 , 7, 18, 5, 3)
console.log(date1.toLocaleString()); //18/8/2024, 5:03:00 am


let date2 = new Date("01-08-2024")
console.log(date2.toLocaleString()); //8/1/2024, 12:00:00 am

let myTimestamp = Date.now()
console.log(myTimestamp); //comes in miliseconds

console.log(date2.getTime()); //gives in miliseconds

console.log(Date.now()); //in miliseconds
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate); //2024-08-14T15:12:21.137Z
console.log(newDate.getMonth()); //7
console.log(newDate.getDate()); //14