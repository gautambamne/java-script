const user = {
    username:"hitesh",
    loginCount: 8,
    signediN: true,

    getUSerDetails: function(){
        // console.log("Got user Details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUSerDetails());


// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.myusername = username;
    this.logginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("chai Aur Code", 11 , false)
console.log(userOne);
console.log(userTwo);

