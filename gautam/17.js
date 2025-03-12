// control flow

//  if else 

const isUserLoggedIn = true;
const temperature = 41;
if(temperature===40){
    console.log("less than 50")
}
else{
    console.log("temperature is grater than 50")
}
// console.log("temperature is greater than 50");

const score = 200
if(score>199){
    const power ="fly"
    console.log(`User Power: ${power}`);
    
}

const balance = 1000
// if (balance>100) console.log("test")

// nesting

if (balance <500){
    console.log("less than 500")
}
else if(balance<100){
    console.log("less than 100")
}
else{
    console.log("less than 1500")
}

const userLoggedIN = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIN && debitCard && 2==3){
    console.log("Allow to buy course");
    
}
else{
    console.log("Incorrect")
}

if(loggedInFromEmail||loggedInFromGoogle){
    console.log("user logged in");
    
}

// switch case

const month = 3

switch (month) {
    case 1:
        console.log("janruary");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("March");
        
        break;

    default:
        console.log("default case match")
        break;
}

const userEmail = []
if(userEmail){
    console.log("got user Email");
    
}
else{
    console.log("Don't have user email");
    
}
// falsy value
    // false , 0 ,-0 , BigInt 0n , null ,undefined , nan. ""

// trurhy value
// "0", 'false', " ",[],{},fuhnction(){} 

if(userEmail.length === 0 ){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5??10
val2 = null ??10
console.log(val2);

// terniary operatoe

// condition?true:false

const icePrice  =100
icePrice <=80?console.log("less than 80"):console.log("more than 80");


