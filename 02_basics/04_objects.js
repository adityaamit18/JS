// const tinderUser = new Object()

// console.log(tinderUser); //{}

const tinderUser = {}

tinderUser.id = "12ab"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //{ id: '12ab', name: 'Samay', isLoggedIn: false }

const regularUser = {
    email: "samayrihana@gmai.com",
    fullname:{
        userfullname:{
            firstname: "Bhupendra",
            lastname: "jogi"
        }
    }
}
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Bhupendra', lastname: 'jogi' } }
console.log(regularUser.fullname.userfullname);//{ firstname: 'Bhupendra', lastname: 'jogi' }
console.log(regularUser.fullname.userfullname.lastname);//jogi

//combining obs
const obj1 ={1: "a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj6 ={5:"a",6:"b"}

//const obj3 = {obj1 , obj2}
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);
console.log(obj4);
const obj5 = Object.assign({},obj1,obj2,obj6)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj5);


const obj69 = {...obj1,...obj2}
console.log(obj69);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users=[
    {
        id:1,
        email:"a@gmail.com",
    },
    
]

console.log(tinderUser);//{ id: '12ab', name: 'Samay', isLoggedIn: false }
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] --array
console.log(Object.values(tinderUser));//[ '12ab', 'Samay', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '12ab' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLdIn'));//false


/*
{ userfullname: { firstname: 'Bhupendra', lastname: 'jogi' } }
{ firstname: 'Bhupendra', lastname: 'jogi' }
jogi
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
{ id: '12ab', name: 'Samay', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ '12ab', 'Samay', false ]
[ [ 'id', '12ab' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]
true
PS C:\Users\Slim 5\Desktop\JSchai> node "C:\Users\Slim 5\Desktop\JSchai\02_basics\04_objects.js"
{ userfullname: { firstname: 'Bhupendra', lastname: 'jogi' } }
{ firstname: 'Bhupendra', lastname: 'jogi' }
jogi
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
: 'b' }
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
{ id: '12ab', name: 'Samay', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ '12ab', 'Samay', false ]
[ [ 'id', '12ab' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]
true
false */

//=================
const course = {
    coursename: "js learn",
    price: "999",
    courseInstructor: "Bhupendra"
}

const {courseInstructor : inst} = course

//console.log(courseInstructor);//Bhupendra
console.log(inst);//Bhupendra