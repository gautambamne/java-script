// const tinderUser = new object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    emaill:"sammy@gmail.com",
    fullName: {
        firstName:"sammy",
        LastName:"sharma"
    }
}

console.log(regularUser.fullName.firstName)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3) 

const obj = {...obj1, ...obj2}
console.log(obj)


const users=[
    {
    id:1,
    email:"xyz@gmail.com"
},
{
    id:1,
    email:"xyz@gmail.com"
},
{
    id:1,
    email:"xyz@gmail.com"
},
{
    id:1,
    email:"xyz@gmail.com"
}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructure object
const course={
    courceName: "js in hindi",
    price:"999",
    courceInstructor: "hitesh"
}

const{courceInstructor:Instuctor}=course
console.log(Instuctor);

// {
//     name:"hitesh",
//     courceName:"js in hindi",
//     price:"free"
// }

[
    {},
    {},
    {}
]
