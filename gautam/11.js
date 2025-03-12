// objects
 
// object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"gautam",
    "full Name":"Gautam Bamne",
    [mySym]:"key1",
    age:21,
    location:"jaipur", 
    email:"gautam@gmail.com",
    isLoggedIn: false,
    lastLogginDay:["Monday","tuesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);

JsUser.email = "Gautam2003B@gmail.com";
console.log(JsUser.email)


JsUser.greting = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greting())


