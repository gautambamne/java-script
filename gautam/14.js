// scope
let a =300

if(true){
    let a = 10
    const b = 20
    console.log("inner",a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="gautam"
    function two(){
    const website = "youtube"
    console.log(username);

    }
    two()
}
one()

// console.log(username)

// +++++++++++++++++++++++++++++++++++
// hoisting
console.log(addone(5))
function addone(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))