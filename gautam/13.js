// function

const sayMyName =function(){
    console.log("G");
    console.log("A")
    console.log("U")
    console.log("T")
    console.log("A")
    console.log("M")
}

sayMyName()

function addTwoNumbers(number1,number2){
   // console.log(number1+number2)
//    let result = number1+number2
//    return result
    return number1+number2
}

const result=addTwoNumbers(3,4)  
console.log("result",result);

 function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
 }

 console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));

const user={
    username:"gautam",
    id:200
}

function handleObject(anyObject){
console.log(`Usename is ${anyObject.username} and id is ${anyObject.id}`);
    
}
// handleObject(user) 

handleObject({
    username:"hitesh",
    price:400
})

const Newarray = [200,400,55,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(Newarray));
