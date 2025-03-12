const outsideTemp = null 
let userName;

const id  = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 1234567815412649n
let bigNum = BigInt(bigNumber)
console.log(typeof bigNum)

// array
let hero = ["saktiman", "Ironman", "captain"]
console.log(hero)

// object

let obj ={
    name:"gautam",
    class:4,
    sec:'A',
};
console.log(obj["name"])

// function

let fun = function(){
    console.log("hello World");
}

//  type of memory
// 1.stack(primitive) 2.heap(Npremitive)

myNameIs = "Gautam Bamne"
let anotherName = myNameIs
anothername = "IronMan"

console.log(myNameIs)
console.log(anothername)

let users ={
    email:"user23@gmail.com",
    upi:"user@ybl"

}

let userTwo = users

userTwo.email = "gautam23@gmail.com"
console.log(users.email)
console.log(userTwo.email);

