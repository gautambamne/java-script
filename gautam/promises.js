// promises 
// the promise is an object represents the eventual completion (or failure) of an asynchronous operation and its resulting valuses

// A promise is in one of the three state
// 1 pending    :intial state,neither fulfilled nor rejected
// 2 fulfilled  :meaning that the operation was completed successfully
// 3 rejected   :meaning that hte operation failed

const promisesOne = new Promise(function(resolve, reject){
    // do an sync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000);
})

promisesOne.then(function(){
    console.log("promsise consume");
    
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async task 2 resolve");
    
})


new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({unsername:"chai", email:"chai@example.com"})
    },1000)
}).then(function(use){
    console.log(use);
    
})

const promiseFOur = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({unsername:"chai", email:"chai@example.com"});

        }
        else{
            reject('ERROR: Something went wrong');
        }
    })
},1000);

promiseFOur.then((user)=>{
    console.log(user);
    return user.unsername
    
}).then((username)=>{
    console.log(username);
   
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("THe promise is either resolve or rejected");
    
})



const promiseFive = new Promise(function(resovle, reject){
    setTimeout(function(){
        let errors = true
        if(!errors){
            resovle({username:"javaScript", password:"1234"})
        }else{
            reject('ERROR: js went wrong')
        }
    })
},1000)

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(errors){
        console.log(errors);
        
    }
    
}
consumePromiseFive()

// async function getAllUser(){
//     try{const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await resposne.json()
//         console.log(data);
//         }
//         catch(error){
//             console.log("E:",error);
            
//         }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))