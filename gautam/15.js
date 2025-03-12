const user={
    username:"gautam",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()
console.log(this)


// function chai(){
    //     let username = "ram";
    //     console.log(this.username)
    
    // }
    // chai()
    
    //arrow function
const chai = () => {
    let username = "ram";
    console.log(this);

}
chai()
 
// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(3,4))


// implicit return 
const addTwo = (num1,num2) => (num1+num2);

console.log(addTwo(3,4))

const addTwo1 = (num1,num2) => ({username: "gautam"});

console.log(addTwo1("username"))

const arr = [2,3,4,5,6,7]
let abc=arr.forEach(()=>{});
